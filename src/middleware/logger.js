const log4js = require('log4js');

module.exports = (options) => {
  const logger = log4js.getLogger();
  logger.level = 'debug'
  return async (ctx, next) => {
    ctx.logger = logger
    await next()
  }
}
