var express = require('express');
var mockjs = require('mockjs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

var makeIssue = function () {
  // 一天有78期
  // 服务端当前时间
  var date = new Date();
  // 记录第一期的时间(9:10:0);
  var first_issue_date = new Date();
  first_issue_date.setHours(9);
  first_issue_date.setMinutes(10);
  first_issue_date.setSeconds(0);
  // 记录截止时间
  var end_issue_date = new Date(first_issue_date.getTime() + 77 * 10 * 60 * 1000);

  var cur_issue, end_time, state;
  if (date.getTime() - first_issue_date.getTime() > 0 && date.getTime() - end_issue_date.getTime() < 0) {
    // 正常销售
    var cur_issue_date = new Date();
    cur_issue_date.setHours(9);
    cur_issue_date.setMinutes(0);
    cur_issue_date.setSeconds(0);
    var minus_time = date.getTime() - cur_issue_date.getTime();
    var h = Math.ceil(minus_time / 1000 / 60 / 10);
    var end_date = new Date(cur_issue_date.getTime() + 1000 * 60 * 10 * h);
    end_time = end_date.getTime();
    cur_issue = [end_date.getFullYear(), ('0' + (end_date.getMonth() + 1)).slice(-2), ('0' + end_date.getDate()).slice(-2), ('0' + h).slice(-2)].join('')
  } else {
    // 今天销售已截止
    var today_end = new Date();
    today_end.setHours(23);
    today_end.setMinutes(59);
    today_end.setSeconds(59);
    if (today_end.getTime() - date.getTime() < 2 * 60 * 60 * 1000) {
      first_issue_date.setDate(date.getDate() + 1);
    }
    end_time = first_issue_date.getTime();
    cur_issue = [first_issue_date.getFullYear(), ('0' + (first_issue_date.getMonth() + 1)).slice(-2), ('0' + first_issue_date.getDate()).slice(-2), '01'].join('')
  }
}

module.exports = router;
