// 响应json格式数据
module.exports = (options) => async (ctx, next) => {
  function sendJson(data) {
    ctx.set('Content-Type', 'application/json');
    ctx.body = JSON.stringify({success: true, messsaage: '', data})
  }
  ctx.sendJson = sendJson;
  await next()
}
