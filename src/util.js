
const getInitialStateFromHTML = (html) => {
  let initialStateRe = /window.__INITIAL_STATE__\s*=\s*(.*?});/s;
  let result = initialStateRe.exec((html));
  let initialState = {};
  if (result && result[1]) {
    initialState = JSON.parse(result[1])
  }
  return initialState
};

// const vm = require("vm");
//
// const getInitialStateFromHTML = (html, index=0) => {
//   console.log(html)
//   const result = html.match(/<script>[\s\S]+?<\/script>/g);
//   if (result) {
//     const content = result[index].replace(/<script>([\s\S]+)<\/script>/, "$1");
//
//     const context = {
//       window: {}
//     };
//     vm.runInNewContext(content, context);
//
//     const initialState = context.window.__INITIAL_STATE__;
//     return initialState;
//   }
// }

module.exports = {
  getInitialStateFromHTML
};
