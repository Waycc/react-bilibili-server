const router = require('koa-router')();
const fetch = require('node-fetch');
const { VIDEO_URL, USER_Agent, RELATED_URL, REPLY_URL } = require('../bilibili_url');
const { getInitialStateFromHTML } = require('../util')

router.get('/video', async ctx => {
  let aid = ctx.query.aid;
  let result = await fetch(VIDEO_URL.replace('{aid}', aid),{
    headers: {"User-Agent": USER_Agent}})
  let htmlText = await result.text()
  let videoInfo = getInitialStateFromHTML(htmlText, 4);
  ctx.sendJson(videoInfo.reduxAsyncConnect)
});

router.get('/archive/related', async ctx => {
  let aid = ctx.query.aid;
  let result = await fetch(RELATED_URL.replace('{aid}', aid),{
    headers: {"User-Agent": USER_Agent}});
  let related = await result.json();
  ctx.sendJson(related.data)
});

router.get('/reply', async ctx => {
  let aid = ctx.query.aid;
  let pn = ctx.query.pn || 1;
  let url = REPLY_URL.replace('{aid}', aid).replace('{pn}', pn);
  let result = await fetch(url)
  let reply = await result.json()
  ctx.sendJson(reply.data)
})

router.get('/mp4', async ctx => {
  let range = ctx.request.get('Range')
  let start = 0;
  let end = "";
  let code = 200;
  if (range) {
    // 获取range start 和 end
    const result = range.match(/bytes=(\d+)-(\d*)/);
    if (result !== null) {
      start = result[1];
      end = result[2];
    }
    code = 206;
  }
  const url = ctx.query.video;
  let result = await fetch(url, {
    headers: {
      Range: `bytes=${start}-${end}`
    }
  })
  const headers = result.headers;
  ctx.set("Cache-Control", "public, max-age=0");
  // 支持断点传输
  ctx.set("Accept-Ranges", "bytes");
  ctx.set("Content-Range", headers.get("Content-Range"));
  ctx.set("Content-Length", headers.get("Content-Length"));
  ctx.set("ETag", headers.get("ETag"));
  ctx.set("Last-Modified", headers.get("Last-Modified"));
  ctx.set("Content-Type", "video/mp4");

  ctx.status = code
  ctx.body = result.body
  // result.body.pipe(res)
})

module.exports = router;
