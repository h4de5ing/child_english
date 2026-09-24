// 每次发版：修改 VERSION，并同步修改 index.html 中 css/js 引用的 ?v= 版本号。
// 带版本号的 URL 保证新页面不会拿到旧缓存里的脚本（新旧文件混用会导致白屏）。
const VERSION = '1.1.0';
const CACHE = `hello-english-${VERSION}`;
const FONT_CACHE = 'hello-english-fonts';

// 应用外壳：首次安装即缓存，保证离线可打开
const PRECACHE = [
  './',
  './index.html',
  `./css/app.css?v=${VERSION}`,
  `./js/data.js?v=${VERSION}`,
  `./js/app.js?v=${VERSION}`,
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== FONT_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 页面：网络优先，保证上线新版本后能尽快拿到；离线时回退缓存
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy));
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Google Fonts：缓存优先，单独缓存，不随版本清理
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(FONT_CACHE).then(c => c.match(req).then(hit => hit || fetch(req).then(res => {
        c.put(req, res.clone());
        return res;
      })))
    );
    return;
  }

  // 同源静态资源：缓存优先（css/js 带版本号，内容变化即 URL 变化），未命中再走网络并缓存
  if (url.origin === location.origin) {
    e.respondWith(
      caches.open(CACHE).then(c => c.match(req).then(hit => hit || fetch(req).then(res => {
        if (res.ok) c.put(req, res.clone());
        return res;
      })))
    );
  }
});
