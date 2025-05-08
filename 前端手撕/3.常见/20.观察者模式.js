class Subject {
  constructor() {
    this.map = new Map()
  }
  subscribe(name, cb) {
    this.map.get(name) || this.map.set(name, [])
    this.map.get(name).push(cb)
  }
  notify(name, args) {
    const cbs = this.map.get(name);
    cbs.forEach(cb => {
      cb(args)
    });
  }
  unsubscribe(name, cb) {
    const cbs = this.map.get(name);
    const targetIndex = cbs.findIndex((item) => item === cb)
    cbs.splice(targetIndex, 1)
  }
}

const newsPublisher = new Subject();

// 定义观察者函数
const reader1 = (article) => {
  console.log("读者1收到新文章:", article.title);
};

const reader2 = (article) => {
  console.log("读者2收到新文章:", article.title);
};

// 订阅 'sports' 类型事件
newsPublisher.subscribe("sports", reader1);
newsPublisher.subscribe("sports", reader2);

// 发布一条体育新闻
newsPublisher.notify("sports", {
  title: "中国队夺得世界杯冠军！",
  content: "...",
});

// 输出结果：
// 读者1收到新文章: 中国队夺得世界杯冠军！
// 读者2收到新文章: 中国队夺得世界杯冠军！

// 取消订阅 reader1
newsPublisher.unsubscribe("sports", reader1);

// 再次发布通知，只有 reader2 收到
newsPublisher.notify("sports", {
  title: "NBA总决赛落幕",
  content: "...",
});

// 输出结果：
// 读者2收到新文章: NBA总决赛落幕