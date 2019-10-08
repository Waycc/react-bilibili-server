const BILIBILI_WEB_API_PREFIX = 'https://api.bilibili.com/x/web-interface';
const BILIBILI_API_PREFIX = 'https://api.bilibili.com'

const INDEX_URL = 'https://m.bilibili.com/index.html';
const SEARCH_DEFAULT_URL = BILIBILI_WEB_API_PREFIX + '/search/default';
const RANKING_URL = BILIBILI_WEB_API_PREFIX + '/ranking';
const RANKING_REGION_URL = BILIBILI_WEB_API_PREFIX + '/ranking/region';
const ARCHIVE_RANK_URL = BILIBILI_API_PREFIX + '/archive_rank/getarchiverankbypartion';
// 首页轮播图
const RES_LOC_URL = 'https://api.bilibili.com/x/web-show/res/loc?pf=7&id=1695';

const USER_Agent = "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) " +
  "AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1";

module.exports = {
  INDEX_URL,
  USER_Agent,
  SEARCH_DEFAULT_URL,
  RANKING_URL,
  RANKING_REGION_URL,
  ARCHIVE_RANK_URL,
  RES_LOC_URL
}
