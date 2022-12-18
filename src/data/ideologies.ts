const ideologies = [
  {
    name: '无政府共产主义',
    stats: {
      econ: 100,
      govt: 100,
      natn: 90,
      scty: 90,
    },
    desc: '无政府共产主义（Anarcho-Communism）是无政府主义中最主要的流派，主张废除国家机器和私有制，在自愿和互助的基础上建立一个各尽所能，按需分配的公有制社会。',
  },
  {
    name: '正统马克思主义',
    stats: {
      econ: 100,
      govt: 70,
      natn: 85,
      scty: 90,
    },
    desc: '正统马克思主义（Orthodox Marxism）坚持激进的社会主义革命的必要性，同时强调社会主义民主和政治自由，反对改良主义和官僚化的集中制。',
  },
  {
    name: '托洛茨基主义',
    stats: {
      econ: 100,
      govt: 50,
      natn: 85,
      scty: 90,
    },
    desc: '托洛茨基主义（Trotskyism）坚持布尔什维克革命初期宣告的工人民主和国际主义原则，强烈反对官僚化和一国社会主义论。',
  },
  {
    name: '列宁主义',
    stats: {
      econ: 100,
      govt: 30,
      natn: 70,
      scty: 75,
    },
    desc: '列宁主义（Leninism）主张建立民主集中制的先锋党并通过革命推翻资本主义，为了实现目标，不排斥临时的强制政策。',
  },
  {
    name: '马克思列宁主义',
    stats: {
      econ: 95,
      govt: 5,
      natn: 40,
      scty: 30,
    },
    desc: '马克思列宁主义（Marxism-Leninism）是斯大林时期苏联发展出的理论体系，其特点是一党专政，严厉的思想文化管制，一国社会主义论以及高度集中的计划经济。',
  },
  {
    name: '自由意志社会主义',
    stats: {
      econ: 85,
      govt: 90,
      natn: 80,
      scty: 85,
    },
    desc: '自由意志社会主义（Libertarian Socialism）是社会主义运动中强调反对由中央集权国家控制社会和经济，主张基层工人自治的流派。',
  },
  {
    name: '民主社会主义',
    stats: {
      econ: 80,
      govt: 70,
      natn: 70,
      scty: 80,
    },
    desc: '民主社会主义（Democratic Socialism）强调民主制在社会主义社会中的必要性，既反对先锋党模式，也不认同过激的无政府主义倾向。',
  },
  {
    name: '社会民主主义',
    stats: {
      econ: 70,
      govt: 60,
      natn: 60,
      scty: 70,
    },
    desc: '社会民主主义（Social Democracy）主张对资本主义制度进行渐进式的改良，并强调这一改良运动本身的意义，而非特定的目标。',
  },
  {
    name: '左翼民粹主义',
    stats: {
      econ: 70,
      govt: 25,
      natn: 40,
      scty: 50,
    },
    desc: '左翼民粹主义（Left-Wing Populism）反对建制派精英，主张社会公平，尤其是保障底层民众，并反对现有的美国主导的全球化和过度的资本主义。',
  },
  {
    name: '民族布尔什维克主义',
    stats: {
      econ: 70,
      govt: 0,
      natn: 20,
      scty: 20,
    },
    desc: '民族布尔什维克主义（National Bolshevism）主张将苏联式的政治经济体制与法西斯的民族主义理念结合起来，反对民主，私有经济和国际主义。',
  },
  {
    name: '无政府互助主义',
    stats: {
      econ: 65,
      govt: 100,
      natn: 80,
      scty: 60,
    },
    desc: '无政府互助主义（Mutualism）主张在自由市场的框架下将生产资料的使用权社会化，同时反对资本主义雇佣劳动。',
  },
  {
    name: '左翼自由意志主义',
    stats: {
      econ: 60,
      govt: 90,
      natn: 75,
      scty: 80,
    },
    desc: '左翼自由意志主义（Left-Libertarianism）在坚持自由意志主义的同时抵制资本主义的私有制和雇佣劳动，尤其反对私人占有自然资源。',
  },
  {
    name: '社会自由主义',
    stats: {
      econ: 55,
      govt: 60,
      natn: 60,
      scty: 70,
    },
    desc: '社会自由主义（Social Liberalism）是一种更加倾向于社会公平及经济干预的自由主义，并且尤其重视社会和文化的进步。',
  },
  {
    name: '进步保守主义',
    stats: {
      econ: 50,
      govt: 45,
      natn: 40,
      scty: 50,
    },
    desc: '进步保守主义（Progressive Conservatism）结合了保守主义和进步主义的主张，支持有限度的社会安全网和财富再分配，以及渐进的社会变革。',
  },
  {
    name: '民族社会主义',
    stats: {
      econ: 50,
      govt: 0,
      natn: 0,
      scty: 10,
    },
    desc: '民族社会主义（National Socialism）是法西斯主义的形式之一，推崇种族主义，并且比一般的法西斯主义更加倾向于国家统辖经济。',
  },
  {
    name: '庇隆主义',
    stats: {
      econ: 50,
      govt: 15,
      natn: 30,
      scty: 50,
    },
    desc: '庇隆主义（Peronism），又称正义主义（Justicialism），是由阿根廷前总统胡安·庇隆提出的政治主张，可概括为三大口号：政治主权、经济独立、社会正义。实际执行中，其以国家复兴和民族解放为主要内容，同时主张中央集权。',
  },
  {
    name: '个人无政府主义',
    stats: {
      econ: 40,
      govt: 100,
      natn: 60,
      scty: 60,
    },
    desc: '个人无政府主义（Individualist Anarchism）者是自然法的忠实信徒，他们认为整个社会本身源自契约，并且个人有权利脱离一切契约，即脱离社会。',
  },
  {
    name: '右翼民粹主义',
    stats: {
      econ: 40,
      govt: 25,
      natn: 30,
      scty: 25,
    },
    desc: '右翼民粹主义（Right-Wing Populism）反对建制派精英，主张贸易保护和反全球化，要求本国人优先，并严格管控移民。',
    link: 'https://en.wikipedia.org/wiki/Right-wing_populism',
  },
  {
    name: '法西斯主义',
    stats: {
      econ: 35,
      govt: 5,
      natn: 15,
      scty: 15,
    },
    desc: '法西斯主义（Fascism）是一种极端的民族主义，强调为了在国际竞争中保障本民族利益，国家必须实行铁腕的独裁统治，以掌控社会的各个方面。',
  },
  {
    name: '自由意志主义',
    stats: {
      econ: 30,
      govt: 90,
      natn: 80,
      scty: 60,
    },
    desc: '自由意志主义（Libertarianism）主张外交上的孤立主义与经济上的充分放任，强调伦理正当性而非功利，以及对军警等国家暴力的抗拒。',
  },
  {
    name: '新自由主义',
    stats: {
      econ: 30,
      govt: 55,
      natn: 70,
      scty: 60,
    },
    desc: '新自由主义（Neoliberalism）主张大规模的私有化和缩小政府，同时在外交方面依靠政府组建贸易同盟和对敌经济制裁来保证自由主义的影响力。',
  },
  {
    name: '保守主义',
    stats: {
      econ: 30,
      govt: 40,
      natn: 50,
      scty: 30,
    },
    desc: '保守主义（Conservatism）源于法国大革命的反对派，它推崇传统的宗教价值、政治体制与财产分配，意在维护社会稳定和延续。',
  },
  {
    name: '新保守主义',
    stats: {
      econ: 20,
      govt: 30,
      natn: 40,
      scty: 25,
    },
    desc: '新保守主义（Neoconservatism）认为民主自由来源于国家传统，因而主张激进地压制文化左翼，捍卫传统，构建爱国主义，制裁国际反民主势力。',
  },
  {
    name: '威权资本主义',
    stats: {
      econ: 20,
      govt: 15,
      natn: 20,
      scty: 30,
    },
    desc: '威权资本主义（Authoritarian Capitalism）是威权体制下的资本主义市场经济，限制个人的自由和政治权利，其政府通常长期由一党领导。',
  },
  {
    name: '古典自由主义',
    stats: {
      econ: 15,
      govt: 65,
      natn: 60,
      scty: 60,
    },
    desc: '古典自由主义（Classical Liberalism）强调法治下的公民自由，特别是经济自由，它主张自由放任的经济政策，并认为政府的职能在于保护这些自由。',
  },
  {
    name: '无政府资本主义',
    stats: {
      econ: 0,
      govt: 95,
      natn: 90,
      scty: 60,
    },
    desc: '无政府资本主义（Anarcho-Capitalism）主张取消国家机器，按照互不侵犯原则组织社会，以保障私有制和市场经济的自由发展。',
  },
  {
    name: '小政府主义',
    stats: {
      econ: 0,
      govt: 85,
      natn: 70,
      scty: 60,
    },
    desc: '小政府主义（Minarchism）主张政府的唯一功能是通过军警和法院来捍卫互不侵犯原则，从而保护公民免遭侵略、盗窃、违约、欺诈并强制执行财产法。',
  },
];

export default ideologies;
