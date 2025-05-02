// 1、求一个字符串数组的最长公共前缀，
// 例如[flower, flex, flight]，返回fl
// 如果没有则返回空
// 2、读代码，写输出结果
// function demo() {
//     const [count, setCount] = useState(0)
//     const dom = useRef(null)
//     useEffect(() => {
//         dom.current.addEventListener('click', () => setCount(count + 1))
//     }, [])
//     return <div ref={dom}>{count}</div>
// }

const longestPrefix = (arr) => {
  let len = arr[0].length;
  let prefix = arr[0];
  arr.slice(1).forEach((element) => {
    while (element.indexOf(prefix) !== 0) {
      len--;
      prefix = arr[0].slice(0, len);
    }
  });
  return prefix;
};
const arr = ["flower", "flex", "flight"];
console.log(longestPrefix(arr));
