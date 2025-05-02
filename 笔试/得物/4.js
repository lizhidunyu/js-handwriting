const isTarget = (s, t) => {
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    const newStr = [...s.slice(i), ...s.slice(0, i)].join("");
    console.log(newStr);

    if (newStr === t) {
      return "Yes";
    }
  }
  return "No";
};
console.log(isTarget("aba", "aab"));
