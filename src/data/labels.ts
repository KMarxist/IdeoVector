type LabelType = [string, string, string, string, string, string, string];

const econ: LabelType = [
  '共产主义',
  '社会主义',
  '偏向平等',
  '中立',
  '偏向市场',
  '资本主义',
  '自由放任',
];
const govt: LabelType = [
  '无政府主义',
  '自由意志主义',
  '偏向自由',
  '中立',
  '偏向专制',
  '威权主义',
  '极权主义',
];
const natn: LabelType = [
  '世界主义',
  '国际主义',
  '偏向国际',
  '中立',
  '偏向本国',
  '民族主义',
  '沙文主义',
];
const scty: LabelType = ['变革', '进步', '偏向改良', '中立', '偏向保守', '传统', '反动'];

class Label {
  label: [string, string, string, string, string, string, string];

  constructor(label: [string, string, string, string, string, string, string]) {
    this.label = label;
  }

  getLabal(value: number) {
    if (value > 100) {
      return '';
    }
    if (value > 90) {
      return this.label[0];
    }
    if (value > 75) {
      return this.label[1];
    }
    if (value > 60) {
      return this.label[2];
    }
    if (value >= 40) {
      return this.label[3];
    }
    if (value >= 25) {
      return this.label[4];
    }
    if (value >= 10) {
      return this.label[5];
    }
    if (value >= 0) {
      return this.label[6];
    }
    return '';
  }
}

const econLabel = new Label(econ);
const govtLabel = new Label(govt);
const natnLabel = new Label(natn);
const sctyLabel = new Label(scty);
const getLabel = (value: number, label: 'econ' | 'govt' | 'natn' | 'scty') => {
  switch (label) {
    case 'econ':
      return { title: `经济：${econLabel.getLabal(value)}`, left: '平等', right: '市场' };
    case 'govt':
      return { title: `政府：${govtLabel.getLabal(value)}`, left: '自由', right: '威权' };
    case 'natn':
      return { title: `外交：${natnLabel.getLabal(value)}`, left: '世界', right: '国家' };
    case 'scty':
      return { title: `社会：${sctyLabel.getLabal(value)}`, left: '进步', right: '传统' };
    default:
      return { title: '?', left: '?', right: '?' };
  }
};

export default getLabel;
