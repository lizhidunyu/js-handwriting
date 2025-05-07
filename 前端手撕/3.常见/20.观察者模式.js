/**
 * 观察者模式实现类
 * 功能：支持事件订阅、取消订阅、通知触发
 */
class Subject {
  constructor() {
    this.observers = new Map();
  }

  subscribe(eventType, observer) {
    if (typeof observer !== "function") {
      throw new Error("Observer must be a function");
    }

    if (!this.observers.has(eventType)) {
      this.observers.set(eventType, new Set());
    }

    this.observers.get(eventType).add(observer);
  }

  unsubscribe(eventType, observer) {
    const observers = this.observers.get(eventType);
    if (observers) {
      observers.delete(observer);
      if (observers.size === 0) {
        this.observers.delete(eventType);
      }
    }
  }

  notify(eventType, data) {
    const observers = this.observers.get(eventType);
    if (observers) {
      observers.forEach((observer) => {
        try {
          observer(data); // 传递数据给观察者
        } catch (error) {
          console.error("Observer error:", error);
        }
      });
    }
  }
}

// ================= 使用示例 =================
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
