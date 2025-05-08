// function renderTemplate(template, context) {
//   return template.replace(/\$\{([^}]+)\}/g, (match, expr) => {
//     try {
//       const keys = Object.keys(context)
//       const values = keys.map(key => context[key])
//       return new Function(...keys,  `return ${expr}`)(...values)
//     } catch(e) {
//       return "";
//     }
//   })
// }


function renderTemplate(template, context) {
  return template.replace(/\$\{([^}]+)\}/g, (match, expre) =>{
    const keys = Object.keys(context)
    const values = keys.map(key => context[key])
    return new Function(...keys, `return ${expre}`)(...values)
    })
}

const context = {
  name: "World",
  a: 1,
  b: 2,
  user: { age: 30 },
};

console.log(
  renderTemplate("Hello ${name}!, 计算：${a + b}, 年龄：${user.age}", context)
);
