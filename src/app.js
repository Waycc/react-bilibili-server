const Koa = require('koa');
const app = new Koa();
const router = require('./router');

const middleware = require('./middleware/index');

middleware(app);

app.use(router.routes());
// app.use(async ctx => {
//   ctx.body = 'Hello World'
// })

app.listen(8800, () => {
  console.log('======= server start =======')
});
