const sendJson = require('./send');
const bodyParser = require('koa-bodyparser');
const logger = require('./logger');
const showRequestInfo = require('./show_request_info');

module.exports = (app) => {
  app.use(logger());
  app.use(showRequestInfo());
  app.use(bodyParser());
  app.use(sendJson())
}
