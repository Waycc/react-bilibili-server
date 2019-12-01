const router = require('koa-router')();
const fetch = require('node-fetch');
const { SEARCH_DEFAULT_URL, HOT_WORD_URL } = require('../bilibili_url');

router.get('/search/default',async ctx => {
  let result = await fetch(`${SEARCH_DEFAULT_URL}`);
  let jsonData = await result.json();
  ctx.sendJson(jsonData.data)
});

router.get('/hotword',async ctx => {
  let result = await fetch(`${HOT_WORD_URL}`);
  let jsonData = await result.json();
  ctx.sendJson(jsonData.list)
});

module.exports = router;
