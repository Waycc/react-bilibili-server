const BILIBILI_WEB_API_PREFIX = 'https://api.bilibili.com/x/web-interface';
const BILIBILI_API_PREFIX = 'https://api.bilibili.com';

const INDEX_URL = 'https://m.bilibili.com/index.html';
const VIDEO_URL = 'https://m.bilibili.com/video/av{aid}.html?redirectFrom=h5';
const RELATED_URL = BILIBILI_WEB_API_PREFIX + '/archive/related?aid={aid}';
const SEARCH_DEFAULT_URL = BILIBILI_WEB_API_PREFIX + '/search/default';
const HOT_WORD_URL = 'https://s.search.bilibili.com/main/hotword';
const RANKING_URL = BILIBILI_WEB_API_PREFIX + '/ranking';
const RANKING_REGION_URL = BILIBILI_WEB_API_PREFIX + '/ranking/region';
const ARCHIVE_RANK_URL = BILIBILI_API_PREFIX + '/archive_rank/getarchiverankbypartion';
const REPLY_URL = 'https://api.bilibili.com/x/v2/reply?type=1&sort=2&oid={aid}&pn={pn}&nohot=1';
// 首页轮播图
const RES_LOC_URL = 'https://api.bilibili.com/x/web-show/res/loc?pf=7&id=1695';
const SUGGEST_URL = 'https://s.search.bilibili.com/main/suggest?func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&bangumi_acc_num=3&special_acc_num=0&upuser_acc_num=0&tag_num=10&term={keyword}';
const TYPE_SEARCH_URL = BILIBILI_WEB_API_PREFIX + '/search/type?keyword={keyword}&page={page}&pagesize={pagesize}&search_type={search_type}&order={order}';
const ALL_SEARCH_URL = BILIBILI_WEB_API_PREFIX + '/search/all/v2?keyword={keyword}&page={page}&pagesize={pagesize}&search_type=all&order={order}';

const USER_Agent = "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) " +
  "AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1";

module.exports = {
  INDEX_URL,
  USER_Agent,
  SEARCH_DEFAULT_URL,
  RANKING_URL,
  RANKING_REGION_URL,
  ARCHIVE_RANK_URL,
  RES_LOC_URL,
  VIDEO_URL,
  RELATED_URL,
  REPLY_URL,
  SUGGEST_URL,
  HOT_WORD_URL,
  TYPE_SEARCH_URL,
  ALL_SEARCH_URL,
};
