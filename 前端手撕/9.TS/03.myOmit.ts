interface Todo {
    title: string
    description: string
    completed: boolean
}
type MyOmit<K, T extends keyof K> = {
    [R in keyof K as R extends T ? never : R] : K[R]
}
type TodoPreview1 = MyOmit<Todo, 'description' | 'title'>
