const router = require('koa-router')();
const fetch = require('node-fetch');
const {RANKING_URL, RANKING_REGION_URL, ARCHIVE_RANK_URL, RES_LOC_URL} = require('../bilibili_url');

router.get('/ranking',async ctx => {
  // 默认按照b站的参数
  let rid = ctx.query.rid || 0;
  let day = ctx.query.day || 3;
  let result = await fetch(`${RANKING_URL}?rid=${rid}&day=${day}`);
  let jsonData = await result.json();
  ctx.sendJson(jsonData)
})

router.get('/loc', async ctx => {
  let result = await fetch(RES_LOC_URL);
  let jsonData = await result.json();
  ctx.sendJson(jsonData)
})

module.exports = router
