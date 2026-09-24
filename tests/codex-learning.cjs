const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const data = fs.readFileSync(path.join(root, 'src_codex/topics.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'src_codex/index.html'), 'utf8');
const code = html.match(/<script>([\s\S]*?)<\/script>/)[1];
function node() {
  return {innerHTML:'', textContent:'', style:{}, dataset:{}, classList:{add(){},remove(){},toggle(){}},
    focus(){},setAttribute(){},removeAttribute(){},insertAdjacentHTML(){},addEventListener(){},
    querySelector(){return node();},showModal(){this.open=true;},close(){this.open=false;}};
}
function boot(stored) {
  const nodes = new Map(), listeners = new Map();
  const find = key => {if(!nodes.has(key))nodes.set(key,node());return nodes.get(key);};
  let saved = JSON.stringify(stored);
  const context = vm.createContext({console,Math,setTimeout:()=>0,clearTimeout(){},
    window:{scrollTo(){},addEventListener(){}},navigator:{},location:{protocol:'file:'},
    document:{getElementById:find,querySelector:find,querySelectorAll:()=>[],activeElement:node(),addEventListener:(key,fn)=>listeners.set(key,fn)},
    localStorage:{getItem:()=>saved,setItem:(_,value)=>saved=value}});
  vm.runInContext(data,context); vm.runInContext(code,context);
  return {run:script=>vm.runInContext(script,context),nodes,listeners,saved:()=>JSON.parse(saved)};
}
const app = boot({heard:{animals:[0,5,5,999]},stickers:['animals'],lastTopic:'animals'});
const {run,nodes} = app;
assert.equal(run('TOPICS.length'),14);
assert.equal(run('TOTAL_WORDS'),152);
assert.equal(run('state.learningMode'),'sequential');
assert.deepEqual(Array.from(run('state.heard.animals')),[0,5]);
assert.equal(run('state.stickers[0]'),'animals');
const oldWords = [
  'cat dog rabbit lion elephant panda','red yellow blue green orange purple','apple banana orange grapes strawberry watermelon',
  'eye ear nose mouth hand foot','mom dad sister brother grandma grandpa','car|bus|truck|taxi|fire engine|ambulance'
];
oldWords.forEach((words,i)=>assert.deepEqual(Array.from(run(`TOPICS[${i}].words.slice(0,6).map(w=>w[0])`)),words.split(i===5?'|':' ')));
for(const id of Array.from(run('TOPICS.map(t=>t.id)'))) {
  run(`state.learningMode='sequential';renderLesson('${id}')`);
  const count=run('activeTopic.words.length');
  assert.equal(run('new Set(activeTopic.words.map(w=>w[0])).size'),count);
  assert.equal(run('new Set(activeTopic.words.map(w=>w[2])).size'),count);
  for(let page=0;page<Math.ceil(count/6);page++) {
    run(`renderLesson('${id}',${page},true)`);
    assert.equal((nodes.get('app').innerHTML.match(/class="word-card"/g)||[]).length,Math.min(6,count-page*6));
  }
  const encountered=[];
  // Full sequential pass, including a final group with fewer than three words.
  for(let group=0;group<Math.ceil(count/3);group++) {
    run('startQuiz()');
    const targets=Array.from(run('quiz.targets'));encountered.push(...targets);
    run('nextRound()');assert.equal(run('quiz.round'),0);
    for(let round=0;round<targets.length;round++) {
      assert.equal(run('new Set(quiz.options).size'),2);
      assert.ok(run('quiz.options.includes(quiz.targets[quiz.round])'));
      run('answer(quiz.options.find(i=>i!==quiz.targets[quiz.round]),document.getElementById("answer"))');
      assert.equal(run('quiz.answered'),false);
      run('answer(quiz.targets[quiz.round],document.getElementById("answer"));nextRound()');
    }
    assert.equal(run('currentView'),'result');
  }
  assert.deepEqual(encountered,Array.from({length:count},(_,i)=>i));
  assert.equal(run('state.quizCursor[activeTopic.id]'),0);
  assert.equal(run('state.stickers.filter(id=>id===activeTopic.id).length'),1);
  run(`state.learningMode='random';state.age='5-6';renderLesson('${id}')`);
  const order=Array.from(run('lessonOrder'));
  assert.deepEqual([...order].sort((a,b)=>a-b),encountered);
  run(`renderLesson('${id}',1,true)`);assert.deepEqual(Array.from(run('lessonOrder')),order);
  run('startQuiz()');assert.equal(run('new Set(quiz.targets).size'),3);assert.equal(run('quiz.options.length'),3);
  assert.notEqual(run('nextTopicId(true)'),id);
  run('state.age="3-4"');
}
assert.equal(run('state.stickers.length'),14);
run('state.learningMode="sequential";renderLesson("actions")');assert.equal(run('nextTopicId(true)'),'animals');
app.listeners.get('change')({target:{id:'learning-mode',value:'random'}});
assert.equal(app.saved().learningMode,'random');
assert.equal(boot(app.saved()).run('state.learningMode'),'random');
const malformed=boot({learningMode:'bad',quizCursor:{animals:-1,colors:999,fruits:'3'},heard:{animals:[-1,0,0,999]}});
assert.equal(malformed.run('state.learningMode'),'sequential');
assert.equal(malformed.run('state.quizCursor.colors'),3);
assert.deepEqual(Array.from(malformed.run('state.heard.animals')),[0]);
assert.equal((run('picture(TOPICS.find(t=>t.id==="numbers").words[9])').match(/<i>/g)||[]).length,10);
run('renderHome();renderStickers();renderParents()');
assert.ok(nodes.get('modal-content').innerHTML.includes('学习顺序'));
new vm.Script(fs.readFileSync(path.join(root,'src_codex/sw.js'),'utf8'));
assert.ok(fs.readFileSync(path.join(root,'src_codex/sw.js'),'utf8').includes("'./topics.js'"));
console.log('PASS: 14 topics / 152 entries; old progress migration; pagination; complete sequential coverage; random permutations; answer retry; rewards; saved settings; PWA data asset.');
