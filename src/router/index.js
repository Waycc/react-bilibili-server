const router = require('koa-router')();
const partitions = require('./partitions')
const ranking = require('./ranking')

router.get('/index', async (ctx, next) => {
  ctx.sendJson({a:1, b: 2})
})

router.use('/api', partitions.routes());
router.use('/api', ranking.routes());

module.exports = router
