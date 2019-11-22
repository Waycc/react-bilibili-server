const router = require('koa-router')();
const fetch = require('node-fetch');
const {RANKING_URL, RANKING_REGION_URL, ARCHIVE_RANK_URL, RES_LOC_URL} = require('../bilibili_url');
const fileType = require("file-type");

router.get('/ranking',async ctx => {
  // 默认按照b站的参数
  let rid = ctx.query.rid || 0;
  let day = ctx.query.day || 3;
  let result = await fetch(`${RANKING_URL}?rid=${rid}&day=${day}`);
  let jsonData = await result.json();
  ctx.sendJson(jsonData.data.list)
})

router.get('/loc', async ctx => {
  let result = await fetch(RES_LOC_URL);
  let jsonData = await result.json();
  ctx.sendJson(jsonData.data)
})

router.get('/image', async ctx => {
  const url = ctx.query.pic;
  let result = await fetch(url);
  ctx.set("Content-Type", 'image/jpg');
  ctx.body = await result.buffer();
});

router.get('/ranking/region', async ctx => {
  let { rid, day } = ctx.query;
  let result = await fetch(`${RANKING_REGION_URL}?rid=${rid}&day=${day}`)
  let jsonData = await result.json();
  ctx.sendJson(jsonData.data)
});

router.get('/archive_rank/getarchiverankbypartion', async ctx => {
  let { tid, pn } = ctx.query;
  let result = await fetch(`${ARCHIVE_RANK_URL}?tid=${tid}&pn=${pn}`)
  let jsonData = await result.json();
  ctx.sendJson(jsonData.data.archives)
});

module.exports = router;
