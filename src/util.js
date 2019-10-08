const getInitialStateFromHTML = (html) => {
  let initialStateRe = /window.__INITIAL_STATE__ = ({.*})/;
  let result = initialStateRe.exec((html));
  let initialState = {};
  if (result && result[1]) {
    initialState = JSON.parse(result[1])
  }
  return initialState
};

module.exports = {
  getInitialStateFromHTML
};
