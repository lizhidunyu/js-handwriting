//使用ts实现exclude方法
type MyExclude<T, U> = T extends U ? never : T

type eg = MyExclude<string | number | boolean, number | boolean>;