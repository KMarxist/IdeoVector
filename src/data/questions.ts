const questions = [
  {
    question: '面对公共危机事件（如恐怖袭击），哪怕会引发民众恐慌骚乱，政府也不应当管控信息。',
    effect: {
      govt: 10,
    },
  },
  {
    question:
      '即使面临人口膨胀或人口老龄化的压力，生不生、生多少小孩也是每个人的自由，政府和社会不应当干涉（包括鼓励生育）。',
    effect: {
      govt: 5,
    },
  },
  {
    question: '当一小部分激进分子企图颠覆国家政权并建立新的极权政权时，政府应当重拳出击。',
    effect: {
      econ: -5,
      govt: -10,
    },
  },
  {
    question: '若批评不自由，则赞美无意义。',
    effect: {
      govt: 10,
    },
  },
  {
    question: '一切形式的国家都应当被废除。',
    effect: {
      govt: 15,
      natn: 15,
    },
  },
  {
    question: '面对暴力示威者引发的冲突骚乱，政府应当止暴制乱恢复秩序。',
    effect: {
      govt: -10,
    },
  },
  {
    question:
      '政治领袖/宗教神明的形象可以作为文艺作品的丑化对象(如《钢之炼金术师》作者的另一部作品)。',
    effect: {
      govt: 10,
    },
  },
  {
    question: '挑战国家主权和社会稳定的言论，不属于言论自由的范畴。',
    effect: {
      govt: -10,
    },
  },
  {
    question: '对文化产品的一切事先审查制度都应当取消。',
    effect: {
      govt: 10,
    },
  },
  {
    question: '每个人在互联网上匿名的权利都应当得到保证。',
    effect: {
      govt: 10,
    },
  },
  {
    question: '我愿意让渡部分个人自由与权利来协助疫情防控（如加强核酸检测等措施）。',
    effect: {
      govt: -10,
    },
  },
  {
    question: '有必要对境外互联网信息进行一定的管控。',
    effect: {
      govt: -10,
    },
  },
  {
    question: '如果政府的政策给民众带来了好处，民众应当感恩政府。',
    effect: {
      govt: -5,
    },
  },
  {
    question: '处于关键时刻的国家需要政治强人。',
    effect: {
      govt: -5,
    },
  },
  {
    question: '进城农民工、外来打工者应享受与本地人同等的教育、医疗、住房等待遇。',
    effect: {
      govt: 5,
    },
  },
  {
    question:
      '突发重大事件（如战争爆发）时，国家可以悬置宪法和法律，行使紧急权力，采取一切必要的非常措施。',
    effect: {
      govt: -10,
    },
  },
  {
    question: '废除警察和军队，以私人安保公司/民兵组织来维持治安和防卫是可行的。',
    effect: {
      govt: 10,
    },
  },
  {
    question: '美国人人有枪，它才不乱。',
    effect: {
      govt: 10,
    },
  },
  {
    question: '国家应主动捍卫自己的利益和价值观，必要时不排除使用武力。',
    effect: {
      govt: -10,
      natn: -10,
    },
  },
  {
    question: '医疗、能源、公共交通等关系民生的基础行业应当成为公共事业。',
    effect: {
      econ: 5,
    },
  },
  {
    question: '征税是一种对私有财产的偷窃行为。',
    effect: {
      econ: -15,
    },
  },
  {
    question: '高福利国家承平日久，丧失了活力，最终必然会输给低福利国家。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '为了经济增长，可以默许市场和企业对劳动者权益的一些损害。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '没有规范限制的市场经济是最好的。',
    effect: {
      econ: -15,
    },
  },
  {
    question: '不应当打击市场经济中自然形成的垄断。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '生产资料私有制应当被废除。',
    effect: {
      econ: 15,
    },
  },
  {
    question: '人家几代人的努力，凭什么输给你的十年寒窗？',
    effect: {
      econ: -10,
    },
  },
  {
    question: '财产权应当在其他一切权利(公民权等)之上。',
    effect: {
      econ: -10,
      govt: -5,
      scty: -5,
    },
  },
  {
    question: '文革是中国历史上最黑暗的十年。',
    effect: {
      econ: -10,
      govt: -5,
    },
  },
  {
    question: '不要妄想在地上建立天国。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '私有制带来的竞争机制给社会发展带来了动力。',
    effect: {
      econ: -15,
    },
  },
  {
    question: '纳粹党(全名国家社会主义德国工人党)是一个左翼政党。',
    effect: {
      econ: -15,
    },
  },
  {
    question: '一些工业部门由私人所有是可以接受的。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '发达国家和发展中国家无产阶级的矛盾大于其国内的阶级矛盾。',
    effect: {
      econ: -10,
      natn: -10,
    },
  },
  {
    question: '一个富人得势的社会比一个只有得势者才能致富的社会要好一些。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '有必要要求企业根据消费者需求的比例来生产。',
    effect: {
      econ: 10,
    },
  },
  {
    question: '工人罢工违反了契约精神。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '现今的全球贸易体系下中美是双赢的，两国之间并不存在不平等交易。',
    effect: {
      econ: -5,
      natn: 5,
    },
  },
  {
    question: '现在怀念计划经济的人只不过是没有体会过权力压迫的叶公好龙罢了。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '前三十年的工业化是一堆废铜烂铁。',
    effect: {
      econ: -15,
    },
  },
  {
    question: '前三十年是工人压迫农民的时代，大下岗只是让工贵们把吃下去的东西吐出来而已。',
    effect: {
      econ: -15,
    },
  },
  {
    question: '种姓制度强于编户齐民。',
    effect: {
      econ: -5,
      govt: 5,
    },
  },
  {
    question: '最低工资标准能够提高的东西只有社会失业率。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '企业的管理权应当属于全体劳动者。',
    effect: {
      econ: 10,
    },
  },
  {
    question: '「全世界无产者联合起来」已经过时了。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '河南710事件是村镇银行储户求仁得仁的结果。',
    effect: {
      econ: -15,
    },
  },
  {
    question: '谷爱凌是新一代青年的榜样，骂她的人都是因为酸。',
    effect: {
      econ: -5,
    },
  },
  {
    question: '苏联生于不义、死于耻辱，是人类文明的一颗毒瘤。',
    effect: {
      econ: -5,
      govt: 3,
    },
  },
  {
    question: '只要员工同意，企业就可以延长工作时间。',
    effect: {
      econ: -10,
    },
  },
  {
    question: '成年人之间自愿且安全的性行为是其自由，不管其婚姻关系如何。',
    effect: {
      scty: 10,
    },
  },
  {
    question: '同性恋者在婚姻、亲子关系、收养或生育等方面，应与异性恋者同等对待。',
    effect: {
      scty: 10,
    },
  },
  {
    question: '律师为十恶不赦、千夫所指的罪犯做辩护是不可接受的。',
    effect: {
      scty: -10,
    },
  },
  {
    question: '女性所受的压迫是剥削形式中最深刻的，且是其他各种压迫的基础。',
    effect: {
      scty: -10,
    },
  },
  {
    question: '汉人男性是当今社会中最大的弱势群体，受到的系统性压迫是最严重的。',
    effect: {
      scty: -10,
      natn: -5,
    },
  },
  {
    question: '汉人男性骑大洋马是为国争光。',
    effect: {
      scty: -10,
      natn: -5,
    },
  },
  {
    question: '女权主义已经过头了。',
    effect: {
      scty: -10,
    },
  },
  {
    question: '为了保护落后地区的文化遗产，可以放缓乃至停止该地区的现代化。',
    effect: {
      econ: -5,
      scty: -10,
    },
  },
  {
    question: '计划生育对汉人不公平。',
    effect: {
      scty: -5,
    },
  },
  {
    question: '人类要生存下去，就必须回到二十五个世纪前寻找孔子的智慧。',
    effect: {
      scty: -10,
      natn: -5,
    },
  },
  {
    question:
      '性少数群体(LGBTQ+，L：女同性恋，G：男同性恋，B：双性恋，T：跨性别，Q：酷儿)是不正常的。',
    effect: {
      scty: -10,
    },
  },
  {
    question: '性少数群体内部的阶级矛盾在其与外界的身份矛盾面前可以忽略不计。',
    effect: {
      econ: -5,
      scty: 5,
    },
  },
  {
    question: '当代中国的社会问题很大程度上可以归结于两千年的秦制传统。',
    effect: {
      econ: -5,
      govt: 5,
    },
  },
  {
    question:
      '只有拥有自治和温和改良传统的国家才能诞生真正的进步，暴力革命的结果只会是以暴易暴，使社会陷入恶性循环。',
    effect: {
      econ: -5,
      govt: 5,
    },
  },
  {
    question: '死刑应当被废除。',
    effect: {
      scty: 15,
    },
  },
  {
    question: '多元文化是对文明的威胁。',
    effect: {
      scty: -10,
    },
  },
  {
    question: '南京不应当举办漫展。',
    effect: {
      scty: -10,
      natn: -5,
    },
  },
  {
    question: '女子无才便是德。',
    effect: {
      scty: -15,
    },
  },
  {
    question: '中小学应当开设系统的性教育（包括多元性别教育）必修课。',
    effect: {
      scty: 10,
    },
  },
  {
    question: '国际事务中的冲突归根到底是文明的冲突。',
    effect: {
      scty: -10,
    },
  },
  {
    question: '色情内容败坏社会风气，有必要进行打击。',
    effect: {
      scty: -10,
    },
  },
  {
    question: '学校应当多传授我们的价值观和传统。',
    effect: {
      scty: -10,
    },
  },
  {
    question:
      '世界各地的人民都有自决权。他们应当自由地决定他们的政治地位，自由地发展他们的经济，社会和文化。',
    effect: {
      scty: 10,
    },
  },
  {
    question: '没有祖国你什么都不是。',
    effect: {
      econ: -5,
      scty: -15,
      natn: -10,
    },
  },
  {
    question: '中国的现代化应当学习英美而非欧陆的制度。',
    effect: {
      econ: -5,
      natn: 3,
    },
  },
  {
    question: '国家和地区之间的边界应当被废除。',
    effect: {
      scty: 15,
      natn: 10,
    },
  },
  {
    question: '族群之间存在天生的智商差异。',
    effect: {
      scty: -10,
    },
  },
  {
    question: '原子弹下无冤魂。',
    effect: {
      scty: -10,
      natn: -10,
    },
  },
  {
    question: '科学无国界，但科学家有祖国。',
    effect: {
      scty: -5,
      natn: -5,
    },
  },
  {
    question: '19世纪伦敦最贫困的工人在想到大英帝国的工业和财富时，也会自豪的挺起胸膛。',
    effect: {
      econ: -5,
      natn: -15,
    },
  },
  {
    question: '泰国政局稳定对中国有利，所以中国人应该支持泰王。',
    effect: {
      govt: -5,
      scty: -10,
      natn: -10,
    },
  },
  {
    question: '在我国居住的外国人应当拥有与本国公民同等的权利。',
    effect: {
      scty: 10,
    },
  },
  {
    question: '为了提高学校国际影响力，可以适当的给予外国留学生优惠待遇。',
    effect: {
      econ: -5,
      natn: 5,
    },
  },
];

export default questions;
