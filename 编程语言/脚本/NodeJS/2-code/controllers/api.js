var MongoClient = require('mongodb').MongoClient;
// {
// 	resultCode: 0,
// 	resultMsg: '',
// 	data: []
// }
// 连接数据库
async function handleDB(method, params = {}) {
	return await new Promise((res,rej) => {
		MongoClient.connect("mongodb://localhost:27017/chatRoom", { useUnifiedTopology:true, useNewUrlParser: true }, function(err, db) {
		    if (err) throw err;
				var dbs = db.db("chatRoom"); // 获取数据库
				var userInfo = dbs.collection("userInfo"); // 获取表
				method({
					db,
					dbs,
					userInfo
				}, params).then(result => res(result))
		});
	})
}

// 获取用户信息
async function getUsers({ db, userInfo }, params) {
	return await new Promise((res,rej) => {
		userInfo.find(params).toArray((err,data) => {
			if (err) {
				rej(err);
			}else {
				res(data);
			}
			db.close();
		})
	})
}
// 添加用户
async function addUser({ db, userInfo }, params) {
	var arg = arguments;
	return await new Promise((res,rej) => {
		userInfo.find({name:params.name}).toArray((err, data) => {
			if(data.length > 0) {
				res({code:'error', msg:'用户名已存在'});
				db.close();
			}else {
				userInfo.insertOne(params, function(err, data) {
					if (err) {
						res({code:'error',msg:'添加失败'});
					}else {
						res({code:'success',msg: '添加成功'});
					}
					db.close();
				});
			}
		})
	})
}

// 检查用户名是否存在, 返回查询数据或false
async function checkUserName({ db, userInfo }, params) {
	return await new Promise((res,rej) => {
		userInfo.find(params).toArray((err, data) => {
			if (err) {
				rej(err);
			}else {
				data.length > 0 ? res(data) : res(false);
			}
			db.close();
		})
	})
}

module.exports = {
	handleDB,
	
	// 获取用户
	'GET /api/getUsers': getUsers,
	
	// 添加用户
	'POST /api/addUser': addUser,
	
	// 检查用户名
	'GET /api/checkUserName': checkUserName,
}
