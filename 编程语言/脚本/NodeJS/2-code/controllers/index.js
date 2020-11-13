const fs = require('fs');
const path = require('path')
const apiList = require('./api');
const handleDB = apiList.handleDB;

// 根据当前请求路径查询文件
// 如果是api返回对应的数据
// 没有则返回404

module.exports = function() {
	return function(req, res, next) {
		var filePath = path.join(__dirname,'../','src',req.url);
		var reqPath = req.method + ' ' + req.url.split('?')[0];
		if(apiList[reqPath]) {
			var method = apiList[reqPath];
			var params = req.method == 'GET' ? req.query : req.body;
			handleDB(method, params).then(result => {
				res.json(result);
				next();
			})
		}else {
			console.log('查文件')
			fs.readFile(filePath, (err, data) => {
				var resData;
				if(err) {
					resData = '404';
				} else {
					resData = data;
				}
				res.end(resData);
				next();
			})
		}
	}
}
