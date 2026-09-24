'use strict';
// Increment this version when updating the application's offline assets.
// Retain the prefix so an update on the same origin can remove old caches.
const CACHE_PREFIX = 'little-sprout-docs-';
const CACHE_NAME = CACHE_PREFIX + 'v4';
// Cache the canonical directory URL; Workers redirects /index.html to /.
const ASSETS = ['./', './topics.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  const home = self.registration.scope;
  const index = new URL('./index.html', home).href;
  const isHome = event.request.mode === 'navigate' && [home, index].includes(url.origin + url.pathname);
  const isAsset = ASSETS.some(path => new URL(path, self.registration.scope).href === url.href);
  if (!isHome && !isAsset) return;
  // Prefer fresh local edits; use the last successful copy when offline.
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const key = isHome ? home : event.request;
    try {
      const response = await fetch(event.request);
      if (response.ok && response.type === 'basic') {
        await cache.put(key, response.clone()).catch(() => {});
        return response;
      }
      return (await cache.match(key)) || response;
    } catch {
      return (await cache.match(key)) || Response.error();
    }
  })());
});
