const CLIENT_ID = 'vajbl979MnHEbTTVVTTo';
const CLIENT_SECRET = '7WxhFcv3w8';
const URL = 'https://openapi.naver.com/v1/papago/n2mt'


var express = require('express');
var app = express();
var query = "번역할 문장을 입력하세요.";
app.get('/translate', function (req, res) {
    var request = require('request');
    var options = {
        url: URL,
        form: {'source':'ko', 'target':'en', 'text':query},
        headers: {'X-Naver-Client-Id':CLIENT_ID, 'X-Naver-Client-Secret': CLIENT_SECRET}
      };
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
      } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    });
 });
 app.listen(3000, function () {
   console.log('http://127.0.0.1:3000/translate app listening on port 3000!');
 });