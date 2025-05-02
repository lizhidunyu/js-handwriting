var simplifyPath = function (path) {
  const stack = [];
  const arr = path.split("/");
  console.log(arr);
  for (let name of arr) {
    if (name === "." || name === "") {
      continue;
    }
    if (name === "..") {
      stack.length && stack.pop();
      continue;
    }
    stack.push(name);
  }
  return "/" + stack.join("/");
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/.../a/../b/c/../d/./"));
