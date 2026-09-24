/* ================= 内容数据 ================= */
const THEMES = [
  { id:'animals', en:'Animals', zh:'动物', emoji:'🐶', c:'#FFB547', dark:'#E08A00', q:'Where is the {w}?', items:[
    {en:'dog',zh:'小狗',e:'🐶',s:'The dog says woof woof!'},
    {en:'cat',zh:'小猫',e:'🐱',s:'The cat says meow!'},
    {en:'duck',zh:'鸭子',e:'🦆',s:'The duck says quack quack!'},
    {en:'cow',zh:'奶牛',e:'🐮',s:'The cow says moo!'},
    {en:'pig',zh:'小猪',e:'🐷',s:'The pig says oink oink!'},
    {en:'lion',zh:'狮子',e:'🦁',s:'The lion says roar!'},
    {en:'elephant',zh:'大象',e:'🐘',s:'The elephant is big.'},
    {en:'monkey',zh:'猴子',e:'🐵',s:'The monkey likes bananas.'},
    {en:'rabbit',zh:'兔子',e:'🐰',s:'The rabbit can jump.'},
    {en:'fish',zh:'小鱼',e:'🐟',s:'The fish can swim.'},
  ]},
  { id:'colors', en:'Colors', zh:'颜色', emoji:'🎨', c:'#FF6B8B', dark:'#E03A62', q:'Which one is {w}?', items:[
    {en:'red',zh:'红色',hex:'#F44336',s:'The apple is red.'},
    {en:'blue',zh:'蓝色',hex:'#2F80ED',s:'The sky is blue.'},
    {en:'yellow',zh:'黄色',hex:'#FFD426',s:'The banana is yellow.'},
    {en:'green',zh:'绿色',hex:'#3DBE5B',s:'The leaf is green.'},
    {en:'orange',zh:'橙色',hex:'#FF8A1F',s:'The orange is orange.'},
    {en:'purple',zh:'紫色',hex:'#9B51E0',s:'The grapes are purple.'},
    {en:'pink',zh:'粉色',hex:'#FF8FC2',s:'The pig is pink.'},
    {en:'brown',zh:'棕色',hex:'#8D5B3A',s:'The bear is brown.'},
    {en:'black',zh:'黑色',hex:'#222222',s:'The night is black.'},
    {en:'white',zh:'白色',hex:'#FFFFFF',s:'The snow is white.'},
  ]},
  { id:'fruits', en:'Fruits', zh:'水果', emoji:'🍎', c:'#5DC47A', dark:'#2E9A4C', q:'Where is the {w}?', items:[
    {en:'apple',zh:'苹果',e:'🍎',s:'I like apples.'},
    {en:'banana',zh:'香蕉',e:'🍌',s:'I like bananas.'},
    {en:'orange',zh:'橙子',e:'🍊',s:'I like oranges.'},
    {en:'grapes',zh:'葡萄',e:'🍇',s:'I like grapes.'},
    {en:'strawberry',zh:'草莓',e:'🍓',s:'I like strawberries.'},
    {en:'watermelon',zh:'西瓜',e:'🍉',s:'I like watermelon.'},
    {en:'pear',zh:'梨',e:'🍐',s:'I like pears.'},
    {en:'peach',zh:'桃子',e:'🍑',s:'I like peaches.'},
    {en:'cherry',zh:'樱桃',e:'🍒',s:'I like cherries.'},
    {en:'pineapple',zh:'菠萝',e:'🍍',s:'I like pineapples.'},
  ]},
  { id:'body', en:'My Body', zh:'身体部位', emoji:'🙋', c:'#4FB6F0', dark:'#1B86C4', q:'Where is the {w}?', items:[
    {en:'eye',zh:'眼睛',e:'👁️',s:'I see with my eyes.'},
    {en:'ear',zh:'耳朵',e:'👂',s:'I hear with my ears.'},
    {en:'nose',zh:'鼻子',e:'👃',s:'I smell with my nose.'},
    {en:'mouth',zh:'嘴巴',e:'👄',s:'I eat with my mouth.'},
    {en:'tooth',zh:'牙齿',e:'🦷',s:'Brush your teeth!'},
    {en:'hand',zh:'手',e:'✋',s:'Clap your hands!'},
    {en:'arm',zh:'手臂',e:'💪',s:'Wave your arms!'},
    {en:'leg',zh:'腿',e:'🦵',s:'Shake your legs!'},
    {en:'foot',zh:'脚',e:'🦶',s:'Stamp your feet!'},
    {en:'face',zh:'脸',e:'🙂',s:'Wash your face!'},
  ]},
  { id:'family', en:'Family', zh:'家人', emoji:'👨‍👩‍👧', c:'#A48BFF', dark:'#7454F0', q:'Who is {w}?', items:[
    {en:'Daddy',zh:'爸爸',e:'👨',s:'I love you, Daddy!'},
    {en:'Mommy',zh:'妈妈',e:'👩',s:'I love you, Mommy!'},
    {en:'Grandpa',zh:'爷爷 / 外公',e:'👴',s:'Hello, Grandpa!'},
    {en:'Grandma',zh:'奶奶 / 外婆',e:'👵',s:'Hello, Grandma!'},
    {en:'brother',zh:'哥哥 / 弟弟',e:'👦',s:'This is my brother.'},
    {en:'sister',zh:'姐姐 / 妹妹',e:'👧',s:'This is my sister.'},
    {en:'baby',zh:'宝宝',e:'👶',s:'The baby is sleeping.'},
    {en:'family',zh:'一家人',e:'👨‍👩‍👧‍👦',s:'I love my family!'},
  ], quizText:{Daddy:'Where is Daddy?',Mommy:'Where is Mommy?',Grandpa:'Where is Grandpa?',Grandma:'Where is Grandma?',brother:'Where is the brother?',sister:'Where is the sister?',baby:'Where is the baby?',family:'Where is the family?'} },
  { id:'cars', en:'Cars', zh:'汽车', emoji:'🚗', c:'#FF7F50', dark:'#E0501C', q:'Where is the {w}?', items:[
    {en:'car',zh:'小汽车',e:'🚗',s:'Beep beep! A car!'},
    {en:'bus',zh:'公交车',e:'🚌',s:'The bus is big.'},
    {en:'taxi',zh:'出租车',e:'🚕',s:'The taxi is yellow.'},
    {en:'truck',zh:'卡车',e:'🚚',s:'The truck is heavy.'},
    {en:'fire truck',zh:'消防车',e:'🚒',s:'The fire truck is red.'},
    {en:'police car',zh:'警车',e:'🚓',s:'Wee woo! A police car!'},
    {en:'ambulance',zh:'救护车',e:'🚑',s:'The ambulance helps people.'},
    {en:'tractor',zh:'拖拉机',e:'🚜',s:'The tractor is on the farm.'},
    {en:'race car',zh:'赛车',e:'🏎️',s:'The race car is fast!'},
  ]},
];
const PRAISE = ['Great job!','Well done!','Super!','Awesome!','You got it!','Excellent!'];
const ROUNDS = 5;

/* ================= 本地存储（仅学习进度与设置，不采集任何音频） ================= */
const store = {
  get(k,d){ try{ const v = localStorage.getItem('he_'+k); return v==null?d:JSON.parse(v);}catch(e){return d;} },
  set(k,v){ try{ localStorage.setItem('he_'+k, JSON.stringify(v)); }catch(e){} },
};
let seen  = store.get('seen', {});          // { animals:['dog',...] }
let stars = store.get('stars', 0);
let settings = Object.assign({rate:0.8, zh:true, auto:true, sfx:true}, store.get('settings', {}));
const save = () => { store.set('seen',seen); store.set('stars',stars); store.set('settings',settings); };

/* ================= 语音（TTS 朗读） ================= */
let voice = null;
function pickVoice(){
  if(!('speechSynthesis' in window)) return;
  const vs = speechSynthesis.getVoices().filter(v=>/^en[-_]US/i.test(v.lang));
  voice = vs.find(v=>/Samantha|Google US English|Jenny|Aria|Ava/i.test(v.name)) || vs[0] || null;
}
if('speechSynthesis' in window){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function speak(text, onEnd){
  if(!('speechSynthesis' in window)){ toast('当前浏览器不支持朗读'); onEnd&&onEnd(); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = settings.rate; u.pitch = 1.1;
  if(voice) u.voice = voice;
  if(onEnd){ u.onend = onEnd; u.onerror = onEnd; }
  speechSynthesis.speak(u);
}

/* ================= 音效（WebAudio 合成，无需素材） ================= */
let actx;
function tone(freqs, dur=.12, type='sine', vol=.18){
  if(!settings.sfx) return;
  try{
    actx = actx || new (window.AudioContext||window.webkitAudioContext)();
    freqs.forEach((f,i)=>{
      const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + i*dur;
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(.001,t+dur*1.6);
      o.connect(g).connect(actx.destination); o.start(t); o.stop(t+dur*1.7);
    });
  }catch(e){}
}
const sfx = {
  tap:  ()=>tone([660],.06,'triangle',.12),
  good: ()=>tone([523,659,784,1047],.09,'triangle'),
  bad:  ()=>tone([220,180],.14,'sine',.15),
};

/* ================= 状态与渲染 ================= */
const $app = document.getElementById('app');
const S = { screen:'home', theme:null, idx:0, game:null };
const themeOf = id => THEMES.find(t=>t.id===id);
const esc = s => String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const vis = (item) => item.hex ? `<span class="swatch" style="--c:${item.hex}"></span>` : item.e;

function go(screen, patch={}){ Object.assign(S, patch, {screen}); render(); }

function render(){
  document.body.classList.toggle('hide-zh', !settings.zh);
  const t = S.theme && themeOf(S.theme);
  if(t){ $app.style.setProperty('--c', t.c); $app.style.setProperty('--c-dark', t.dark); }
  $app.innerHTML = ({home, theme, detail, game, result})[S.screen](t);
  if(S.screen==='detail' && settings.auto) setTimeout(()=>sayWord(), 250);
  if(S.screen==='game') setTimeout(()=>askQuestion(), 350);
}

/* ---- 首页 ---- */
function home(){
  const cards = THEMES.map(t=>{
    const n = (seen[t.id]||[]).length, pct = Math.round(n/t.items.length*100);
    return `<button class="theme press" style="--c:${t.c}" data-act="open" data-id="${t.id}">
      <span class="emo">${t.emoji}</span>
      <span class="en">${t.en}</span><span class="zh">${t.zh}</span>
      <span class="progress"><i style="width:${pct}%"></i></span>
    </button>`;
  }).join('');
  return `<div class="screen">
    <div class="bar">
      <div class="stars">⭐ <span>${stars}</span></div>
      <div style="flex:1"></div>
      <button class="round hold" data-hold="parent" aria-label="家长设置">⚙️
        <svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="30"/></svg></button>
    </div>
    <div class="hello"><div class="big">Hello! 👋</div><div class="sub">选一个主题，一起说英语吧</div></div>
    <div class="scroll"><div class="themes">${cards}</div></div>
  </div>`;
}

/* ---- 主题页：单词卡网格 ---- */
function theme(t){
  const s = seen[t.id]||[];
  const words = t.items.map((it,i)=>`
    <button class="word press ${s.includes(it.en)?'seen':''}" data-act="word" data-i="${i}">
      <span class="v">${vis(it)}</span><span class="t">${esc(it.en)}</span><span class="z">${it.zh}</span>
    </button>`).join('');
  return `<div class="screen">
    <div class="bar">
      <button class="round" data-act="home" aria-label="返回">⬅️</button>
      <h1>${t.emoji} ${t.en}<small class="zh">${t.zh}</small></h1>
    </div>
    <div class="scroll"><div class="words">${words}</div></div>
    <div class="footer"><button class="cta press" data-act="play">🎮 Play <span class="zh" style="font-size:18px;opacity:.9">玩游戏</span></button></div>
  </div>`;
}

/* ---- 单词详情：大卡片 ---- */
function detail(t){
  const it = t.items[S.idx];
  markSeen(t, it);
  const dots = t.items.map((_,i)=>`<i class="${i===S.idx?'on':''}"></i>`).join('');
  return `<div class="screen">
    <div class="bar">
      <button class="round" data-act="back" aria-label="返回">✖️</button>
      <h1 style="text-align:center">${S.idx+1} / ${t.items.length}</h1>
      <div class="stars">⭐ ${stars}</div>
    </div>
    <div class="stage" id="stage">
      <button class="arrow press" data-act="prev" ${S.idx===0?'disabled':''} aria-label="上一个">◀</button>
      <div class="flash">
        <button class="pic" id="pic" data-act="sayWord">${vis(it)}</button>
        <div class="w">${esc(it.en)}</div>
        <div class="z">${it.zh}</div>
        <div class="row">
          <button class="pill press" data-act="sayWord" id="pw">🔊 Word</button>
          <button class="pill press" data-act="saySent" id="ps">💬 Sentence</button>
        </div>
        <div class="z" style="font-size:16px;margin-top:12px">“${esc(it.s)}”</div>
      </div>
      <button class="arrow press" data-act="next" ${S.idx===t.items.length-1?'disabled':''} aria-label="下一个">▶</button>
    </div>
    <div class="dots">${dots}</div>
  </div>`;
}
function markSeen(t,it){
  const s = seen[t.id] = seen[t.id]||[];
  if(!s.includes(it.en)){ s.push(it.en); save(); }
}
function flashBtn(id){
  const b = document.getElementById(id); if(!b) return () => {};
  b.classList.add('speaking'); return ()=>b.classList.remove('speaking');
}
function sayWord(){
  const t = themeOf(S.theme), it = t.items[S.idx];
  const pic = document.getElementById('pic');
  if(pic){ pic.classList.remove('pop'); void pic.offsetWidth; pic.classList.add('pop'); }
  speak(it.en, flashBtn('pw'));
}
function saySent(){
  const t = themeOf(S.theme), it = t.items[S.idx];
  speak(it.s, flashBtn('ps'));
}

/* ---- 游戏：听音选图 ---- */
const shuffle = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
function newGame(t){
  const targets = shuffle(t.items).slice(0, ROUNDS);
  return { round:0, got:0, targets, locked:false, opts:makeOpts(t, targets[0]) };
}
function makeOpts(t, target){
  const others = shuffle(t.items.filter(i=>i.en!==target.en)).slice(0,3);
  return shuffle([target, ...others]);
}
function questionText(t, it){
  return (t.quizText && t.quizText[it.en]) || t.q.replace('{w}', it.en);
}
function game(t){
  const g = S.game, it = g.targets[g.round];
  const gs = Array.from({length:ROUNDS},(_,i)=>`<span class="${i<g.got?'got':''}">⭐</span>`).join('');
  const q = esc(questionText(t,it)).replace(esc(it.en), `<b>${esc(it.en)}</b>`);
  const opts = g.opts.map((o,i)=>`<button class="opt press" data-act="pick" data-i="${i}">${vis(o)}</button>`).join('');
  return `<div class="screen">
    <div class="bar">
      <button class="round" data-act="quit" aria-label="退出">✖️</button>
      <div style="flex:1"></div>
      <div class="gstars">${gs}</div>
    </div>
    <div class="prompt">
      <button class="listen" id="listen" data-act="ask" aria-label="再听一遍">🔊</button>
      <div class="q">${q}</div>
    </div>
    <div class="opts">${opts}</div>
  </div>`;
}
function askQuestion(){
  const t = themeOf(S.theme), it = S.game.targets[S.game.round];
  const l = document.getElementById('listen'); l && l.classList.add('pulse');
  speak(questionText(t,it), ()=>{ l && l.classList.remove('pulse'); });
}
function pick(i, btn){
  const g = S.game; if(g.locked) return;
  const t = themeOf(S.theme), target = g.targets[g.round], chosen = g.opts[i];
  if(chosen.en === target.en){
    g.locked = true; g.got++; stars++; save();
    btn.classList.add('right');
    document.querySelectorAll('.opt').forEach(b=>{ if(b!==btn) b.classList.add('dim'); });
    const spans = document.querySelectorAll('.gstars span'); spans[g.got-1] && spans[g.got-1].classList.add('got');
    sfx.good(); confetti(10);
    speak(`${PRAISE[Math.floor(Math.random()*PRAISE.length)]} ${target.en}!`);
    setTimeout(()=>{
      g.round++; g.locked = false;
      if(g.round >= ROUNDS){ go('result'); }
      else { g.opts = makeOpts(t, g.targets[g.round]); render(); }
    }, 1800);
  } else {
    btn.classList.remove('wrong'); void btn.offsetWidth; btn.classList.add('wrong');
    sfx.bad();
    // 温和纠错：说出孩子点的是什么，再重复问题
    speak(`That's ${chosen.en}. ${questionText(t,target)}`);
  }
}

/* ---- 结果页 ---- */
function result(t){
  const g = S.game;
  const gs = Array.from({length:ROUNDS},(_,i)=>`<span class="got" style="animation-delay:${i*.15}s">⭐</span>`).join('');
  setTimeout(()=>{ confetti(40); sfx.good(); speak('Hooray! You did it!'); }, 200);
  return `<div class="screen"><div class="result">
    <div class="trophy">🏆</div>
    <h2>Hooray!</h2>
    <div class="zh" style="font-size:18px;color:var(--ink-soft)">太棒了，你找到了 ${g.got} 个！</div>
    <div class="gstars">${gs}</div>
    <div class="btns">
      <button class="cta press" data-act="play">🔁 Again <span class="zh" style="font-size:18px">再玩一次</span></button>
      <button class="cta ghost press" data-act="toTheme">📚 Words <span class="zh" style="font-size:18px">看单词</span></button>
      <button class="cta ghost press" data-act="home">🏠 Home <span class="zh" style="font-size:18px">回首页</span></button>
    </div>
  </div></div>`;
}

/* ================= 事件 ================= */
$app.addEventListener('click', e=>{
  const b = e.target.closest('[data-act]'); if(!b || b.disabled) return;
  const act = b.dataset.act, t = S.theme && themeOf(S.theme);
  if(!['pick','sayWord','saySent','ask'].includes(act)) sfx.tap();
  switch(act){
    case 'open':    go('theme',{theme:b.dataset.id}); break;
    case 'home':    window.speechSynthesis && speechSynthesis.cancel(); go('home',{theme:null}); break;
    case 'word':    go('detail',{idx:+b.dataset.i}); break;
    case 'back':
    case 'toTheme':
    case 'quit':    window.speechSynthesis && speechSynthesis.cancel(); go('theme'); break;
    case 'prev':    if(S.idx>0) go('detail',{idx:S.idx-1}); break;
    case 'next':    if(S.idx<t.items.length-1) go('detail',{idx:S.idx+1}); break;
    case 'sayWord': sayWord(); break;
    case 'saySent': saySent(); break;
    case 'play':    go('game',{game:newGame(t)}); break;
    case 'ask':     askQuestion(); break;
    case 'pick':    pick(+b.dataset.i, b); break;
  }
});

// 详情页左右滑动切换
let sx=null;
$app.addEventListener('touchstart', e=>{ if(S.screen==='detail') sx=e.touches[0].clientX; }, {passive:true});
$app.addEventListener('touchend', e=>{
  if(S.screen!=='detail' || sx==null) return;
  const dx = e.changedTouches[0].clientX - sx; sx=null;
  const t = themeOf(S.theme);
  if(dx < -60 && S.idx < t.items.length-1) go('detail',{idx:S.idx+1});
  if(dx >  60 && S.idx > 0) go('detail',{idx:S.idx-1});
});

// 家长锁：长按 1.6 秒进入设置（防止孩子误触）
let holdTimer=null;
$app.addEventListener('pointerdown', e=>{
  const h = e.target.closest('[data-hold]'); if(!h) return;
  h.classList.add('holding');
  holdTimer = setTimeout(()=>{ h.classList.remove('holding'); openSettings(); }, 1600);
});
['pointerup','pointerleave','pointercancel'].forEach(ev=>$app.addEventListener(ev, e=>{
  const h = document.querySelector('.holding');
  if(holdTimer && h){ clearTimeout(holdTimer); holdTimer=null; h.classList.remove('holding'); if(ev==='pointerup') toast('家长请长按 ⚙️ 进入设置'); }
}));

function openSettings(){
  holdTimer=null;
  const m = document.createElement('div'); m.className='mask';
  const draw = ()=> m.innerHTML = `<div class="sheet">
    <h3>家长设置</h3>
    <p class="note">本应用只做点击互动与标准发音播放，不采集、不录制孩子的任何声音。</p>
    <div class="set"><span>朗读语速</span><div class="seg">
      <button data-rate="0.6" class="${settings.rate==0.6?'on':''}">慢</button>
      <button data-rate="0.8" class="${settings.rate==0.8?'on':''}">适中</button>
      <button data-rate="1" class="${settings.rate==1?'on':''}">正常</button></div></div>
    <div class="set"><span>显示中文释义</span><button class="switch ${settings.zh?'on':''}" data-tog="zh"></button></div>
    <div class="set"><span>打开卡片自动朗读</span><button class="switch ${settings.auto?'on':''}" data-tog="auto"></button></div>
    <div class="set"><span>音效</span><button class="switch ${settings.sfx?'on':''}" data-tog="sfx"></button></div>
    <div class="set"><span>学习进度：已认识 ${Object.values(seen).reduce((a,b)=>a+b.length,0)} 个单词</span><button class="danger" data-reset>清空进度</button></div>
    <button class="cta press" style="margin-top:12px;--c:#3A2E2A" data-close>完成</button>
  </div>`;
  draw();
  m.addEventListener('click', e=>{
    if(e.target===m || e.target.closest('[data-close]')){ m.remove(); render(); return; }
    const r = e.target.closest('[data-rate]'); if(r){ settings.rate=+r.dataset.rate; save(); draw(); speak('Hello!'); }
    const tg = e.target.closest('[data-tog]'); if(tg){ settings[tg.dataset.tog]=!settings[tg.dataset.tog]; save(); draw(); }
    if(e.target.closest('[data-reset]') && confirm('确定清空学习进度和星星吗？')){ seen={}; stars=0; save(); draw(); }
  });
  document.body.appendChild(m);
}

/* ================= 小工具 ================= */
function toast(msg){
  const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(()=>el.classList.remove('show'), 1600);
}
function confetti(n){
  const set = ['⭐','🎉','✨','🎈','💖','🌟'];
  for(let i=0;i<n;i++){
    const s = document.createElement('span'); s.className='confetti';
    s.textContent = set[i%set.length];
    s.style.left = Math.random()*100+'vw';
    s.style.animationDuration = (1.2+Math.random()*1.2)+'s';
    s.style.animationDelay = (Math.random()*.3)+'s';
    document.body.appendChild(s); setTimeout(()=>s.remove(), 3000);
  }
}

render();
