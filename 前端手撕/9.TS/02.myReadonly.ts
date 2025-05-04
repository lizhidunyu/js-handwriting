interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type TodoPreview2 = MyReadonly<Todo>;
