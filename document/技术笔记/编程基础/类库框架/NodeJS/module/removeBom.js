// 删除文本文件头部的bom
// windows 在以utf-8编码保存txt文件时会在头部添加一段bom标记, 如果在合并文件时把这个标记也合并会导致出错

// bom标记本身是uncode字符,位于文件头部, 个编码对应的二进制字节如下:
//     Bytes      Encoding
// ----------------------------
//     FE FF       UTF16BE
//     FF FE       UTF16LE
//     EF BB BF    UTF8
function removeBom(pathname) {
	var bin = fs.readFileSync(pathname);
	
	if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
		bin = bin.slice(3);
	}

	return bin.toString('utf-8');
}

module.exports = {removeBom}