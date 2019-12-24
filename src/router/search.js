const router = require('koa-router')();
const fetch = require('node-fetch');
const {SEARCH_DEFAULT_URL, HOT_WORD_URL, SUGGEST_URL, TYPE_SEARCH_URL, ALL_SEARCH_URL} = require('../bilibili_url');

router.get('/search/default', async ctx => {
  let result = await fetch(`${SEARCH_DEFAULT_URL}`);
  let jsonData = await result.json();
  ctx.sendJson(jsonData.data);
});

router.get('/hotword', async ctx => {
  let result = await fetch(`${HOT_WORD_URL}`);
  let jsonData = await result.json();
  ctx.sendJson(jsonData.list);
});

router.get('/suggest', async ctx => {
  let keyword = ctx.query.keyword;
  let result = await fetch(`${encodeURI(SUGGEST_URL.replace('{keyword}', keyword))}`);
  let jsonData = await result.json();
  ctx.sendJson(jsonData.result || []);
});

router.get('/search/all', async ctx => {
  let keys = ['keyword', 'page', 'pagesize', 'order', 'search_type'];
  let url = ALL_SEARCH_URL;
  keys.forEach(key => {
    url = url.replace(`{${key}}`, ctx.query[key]);
  });
  let result = await fetch(encodeURI(url));
  let jsonData = await result.json();
  ctx.sendJson(jsonData.data || {});
});

router.get('/search/type', async ctx => {
  let keys = ['keyword', 'page', 'pagesize', 'order', 'search_type'];
  let url = TYPE_SEARCH_URL;
  keys.forEach(key => {
    url = url.replace(`{${key}}`, ctx.query[key]);
  });
  let result = await fetch(encodeURI(url));
  let jsonData = await result.json();
  ctx.sendJson(jsonData.data || {});
});

module.exports = router;
