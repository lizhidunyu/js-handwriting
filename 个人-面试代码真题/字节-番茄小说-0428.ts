// 时间：2025.05.28
// 一面

// 01.说输出
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  });
}

// 02.TS类型工具
// 已知一个类型A，类型B继承了A的所有类型，但是对于其中的属性children改写了string
interface A {
  name: string;
  id: number;
  children: Record<string, string>;
}

type B = Omit<A, "children"> & {
  children: string;
};

type C = {
  children: string;
} & A;

type D = {
  [K in keyof A]: K extends "children" ? string : A[K];
};
