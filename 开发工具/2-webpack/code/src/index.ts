type generator = {
    dataUrl: {
        encoding: string | false,       // 模块源码编码方式，设置为 false 时会禁用编码。
        mimetype: string,               // 设置文件类型，默认根据模块资源后缀设置。
    } | ((a:string)=> void)
}