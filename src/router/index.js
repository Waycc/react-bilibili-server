const router = require('koa-router')();
const fs = require('fs')
const partitions = require('./partitions');
const ranking = require('./ranking');
const _static = require('koa-static')
const path = require('path')

router.use('/api', partitions.routes());
router.use('/api', ranking.routes());

router.get('/static/*', async (ctx, next) => {
  let suffix = ctx.url.includes('js') ? 'js' : 'css';
  let resourcesPath = './src/build' + ctx.url
  console.log(resourcesPath)
  ctx.type = 'text/' + suffix;
  ctx.body = fs.createReadStream(resourcesPath);
})

router.get('*', async ctx => {
  console.log(111111)
  console.log(ctx.url)

  ctx.type = 'text/html';
  ctx.body = fs.createReadStream('./src/build/index.html');
})

module.exports = router;
