// Keep existing topic IDs and word positions stable: saved progress uses them.
window.LITTLE_SPROUT_TOPICS = [
  {id:'animals',zh:'动物好朋友',en:'Animals',place:'森林里的见面会',tint:'#e5ecd3',icon:'🦁',side:'🐰',tiny:'🌿',sticker:'森林好朋友',words:[
    ['cat','小猫','🐱'],['dog','小狗','🐶'],['rabbit','兔子','🐰'],['lion','狮子','🦁'],['elephant','大象','🐘'],['panda','熊猫','🐼'],
    ['tiger','老虎','🐯'],['monkey','猴子','🐵'],['bear','熊','🐻'],['pig','小猪','🐷'],['cow','奶牛','🐮'],['sheep','绵羊','🐑'],
    ['duck','鸭子','🦆'],['chicken','鸡','🐔'],['horse','马','🐴'],['fish','鱼','🐟'],['bird','小鸟','🐦'],['frog','青蛙','🐸']]},
  {id:'colors',zh:'彩虹调色盘',en:'Colors',place:'把世界涂成彩虹',tint:'#ede4f1',icon:'🎨',side:'🌈',tiny:'✨',sticker:'彩虹小画家',words:[
    ['red','红色','#eb6862'],['yellow','黄色','#f7d24c'],['blue','蓝色','#709ee8'],['green','绿色','#81b87b'],['orange','橙色','#f2a351'],['purple','紫色','#a18bd1'],
    ['pink','粉色','#f4aac4'],['brown','棕色','#9a6847'],['black','黑色','#303438'],['white','白色','#ffffff'],['gray','灰色','#a1a5ab'],['gold','金色','#c39a2c']]},
  {id:'fruits',zh:'水果小集市',en:'Fruits',place:'装满甜甜的小篮子',tint:'#f8e6d7',icon:'🍎',side:'🍌',tiny:'🍃',sticker:'水果小达人',words:[
    ['apple','苹果','🍎'],['banana','香蕉','🍌'],['orange','橙子','🍊'],['grapes','葡萄','🍇'],['strawberry','草莓','🍓'],['watermelon','西瓜','🍉'],
    ['pear','梨','🍐'],['peach','桃子','🍑'],['cherry','樱桃','🍒'],['pineapple','菠萝','🍍'],['lemon','柠檬','🍋'],['kiwi','猕猴桃','🥝']]},
  {id:'body',zh:'身体小秘密',en:'My body',place:'认识可爱的自己',tint:'#f6e3dc',icon:'👋',side:'🦶',tiny:'✨',sticker:'身体小博士',words:[
    ['eye','眼睛','👁️'],['ear','耳朵','👂'],['nose','鼻子','👃'],['mouth','嘴巴','👄'],['hand','手','🖐️'],['foot','脚','🦶'],
    ['arm','手臂','💪'],['leg','腿','🦵'],['tooth','牙齿','🦷'],['tongue','舌头','👅'],['head','头','🧑'],['hair','头发','🦱']]},
  {id:'family',zh:'我爱我的家',en:'My family',place:'给家人一个大拥抱',tint:'#f6edcd',icon:'🏡',side:'💛',tiny:'☀️',sticker:'暖暖小家人',words:[
    ['mom','妈妈','👩'],['dad','爸爸','👨'],['sister','姐妹','👧'],['brother','兄弟','👦'],['grandma','奶奶 / 外婆','👵'],['grandpa','爷爷 / 外公','👴'],
    ['baby','宝宝','👶'],['family','家人','👨‍👩‍👧‍👦'],['parents','爸爸妈妈','👩👨'],['home','家','🏠']]},
  {id:'vehicles',zh:'汽车嘟嘟嘟',en:'Vehicles',place:'出发！小小车队',tint:'#dfebef',icon:'🚙',side:'🚌',tiny:'☁️',sticker:'出发小司机',words:[
    ['car','小汽车','🚗'],['bus','公交车','🚌'],['truck','卡车','🚚'],['taxi','出租车','🚕'],['fire engine','消防车','🚒'],['ambulance','救护车','🚑'],
    ['police car','警车','🚓'],['tractor','拖拉机','🚜'],['bicycle','自行车','🚲'],['motorcycle','摩托车','🏍️'],['train','火车','🚆'],['airplane','飞机','✈️']]},
  {id:'numbers',zh:'数字点点乐',en:'Numbers',place:'一起来数一数',tint:'#e4edd7',icon:'🔢',side:'⭐',tiny:'✨',sticker:'数数小能手',words:[
    ['one','一','number:1'],['two','二','number:2'],['three','三','number:3'],['four','四','number:4'],['five','五','number:5'],
    ['six','六','number:6'],['seven','七','number:7'],['eight','八','number:8'],['nine','九','number:9'],['ten','十','number:10']]},
  {id:'shapes',zh:'形状捉迷藏',en:'Shapes',place:'发现身边的小形状',tint:'#e8e3f4',icon:'🔷',side:'🔺',tiny:'✨',sticker:'形状发现家',words:[
    ['circle','圆形','shape:circle'],['square','正方形','shape:square'],['triangle','三角形','shape:triangle'],['rectangle','长方形','shape:rectangle'],
    ['oval','椭圆形','shape:oval'],['star','星形','shape:star'],['heart','心形','shape:heart'],['diamond','菱形','shape:diamond']]},
  {id:'weather',zh:'天气观察站',en:'Weather',place:'看看今天的天空',tint:'#deedf4',icon:'🌤️',side:'🌈',tiny:'☁️',sticker:'天气观察员',words:[
    ['sunny','晴朗的','☀️'],['rainy','下雨的','🌧️'],['cloudy','多云的','☁️'],['windy','刮风的','🌬️'],
    ['snowy','下雪的','🌨️'],['rainbow','彩虹','🌈'],['hot','炎热的','🥵'],['cold','寒冷的','🥶']]},
  {id:'food',zh:'美味小厨房',en:'Food',place:'开饭啦，认识好吃的',tint:'#f4e8d5',icon:'🍞',side:'🥛',tiny:'🥄',sticker:'美味小厨师',words:[
    ['bread','面包','🍞'],['milk','牛奶','🥛'],['egg','鸡蛋','🥚'],['rice','米饭','🍚'],['noodles','面条','🍜'],['cheese','奶酪','🧀'],
    ['carrot','胡萝卜','🥕'],['corn','玉米','🌽'],['broccoli','西兰花','🥦'],['potato','土豆','🥔'],['tomato','番茄','🍅'],['water','水','💧']]},
  {id:'clothes',zh:'穿衣小能手',en:'Clothes',place:'给今天挑一身衣服',tint:'#f1e1ec',icon:'👕',side:'🧢',tiny:'✨',sticker:'穿衣小达人',words:[
    ['shirt','衬衫','👔'],['T-shirt','T 恤','👕'],['pants','裤子','👖'],['dress','连衣裙','👗'],['coat','外套','🧥'],
    ['socks','袜子','🧦'],['shoes','鞋子','👟'],['hat','帽子','🧢'],['scarf','围巾','🧣'],['gloves','手套','🧤']]},
  {id:'toys',zh:'玩具小天地',en:'Toys',place:'一起分享喜欢的玩具',tint:'#f5e9c9',icon:'🧸',side:'🪁',tiny:'🎈',sticker:'快乐小玩家',words:[
    ['ball','球','⚽'],['teddy bear','泰迪熊','🧸'],['kite','风筝','🪁'],['balloon','气球','🎈'],['robot','机器人','🤖'],
    ['puzzle','拼图','🧩'],['yo-yo','悠悠球','🪀'],['drum','鼓','🥁'],['crayons','蜡笔','🖍️'],['scooter','滑板车','🛴']]},
  {id:'nature',zh:'自然小花园',en:'Nature',place:'和花草一起长大',tint:'#e0ecd6',icon:'🌻',side:'🌳',tiny:'🦋',sticker:'自然小园丁',words:[
    ['tree','树','🌳'],['flower','花','🌸'],['leaf','叶子','🍃'],['sun','太阳','☀️'],['moon','月亮','🌙'],
    ['star','星星','⭐'],['mountain','山','⛰️'],['ocean','海洋','🌊'],['butterfly','蝴蝶','🦋'],['bee','蜜蜂','🐝']]},
  {id:'actions',zh:'动一动乐园',en:'Actions',place:'用身体说英语',tint:'#e2e8f3',icon:'👏',side:'💃',tiny:'🎵',sticker:'活力小伙伴',words:[
    ['walk','走路','🚶'],['run','跑步','🏃'],['dance','跳舞','💃'],['clap','拍手','👏'],
    ['swim','游泳','🏊'],['sleep','睡觉','😴'],['eat','吃东西','🍽️'],['read','阅读','📖']]}
];
