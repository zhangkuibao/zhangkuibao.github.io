// 遍历目录

const fs = require('fs');
// 同步遍历
function traversalDirSync(dir, callback) {
	fs.readdirSync(dir).forEach(function(file) {
		var pathname = path.join(dir, file);
		// 如果该名字对应的是目录则继续递归, 否则执行回调
		if (fs.statSync(pathname).isDirectory()) {
			travel(pathname, callback);
		} else {
			console.log(pathname, callback)
		}
	});
}

// 异步遍历
function traversalDir(dir, callback, finish) {
	fs.readdir(dir, function(err, files) {
		(function next(i) {
			if (i < files.length) {
				var pathname = path.join(dir, files[i]);

				fs.stat(pathname, function(err, stats) {
					if (stats.isDirectory()) {
						travel(pathname, callback, function() {
							next(i + 1);
						});
					} else {
						callback(pathname, function() {
							next(i + 1);
						});
					}
				});
			} else {
				finish && finish();
			}
		}(0));
	});
}

module.exports = {
	traversalDirSync,
	traversalDir
}
