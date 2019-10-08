const router = require('koa-router')();
const fetch = require('node-fetch');
const {INDEX_URL, USER_Agent} = require('../bilibili_url');
const { getInitialStateFromHTML } = require('../util');

router.get('/partitions', async (ctx, next) => {
  let res = await fetch(INDEX_URL, {
    headers: {"User-Agent": USER_Agent}});
  let text = await res.text();
  let navigator = getInitialStateFromHTML(text, 0)
  // ctx.body = text
  ctx.sendJson(navigator)
});

module.exports = router
