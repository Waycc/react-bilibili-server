module.exports = () => async (ctx, next) => {
  const req = ctx.request;
  ctx.logger.info(`request ${req.method} ${req.url}`)
  await next()
}
