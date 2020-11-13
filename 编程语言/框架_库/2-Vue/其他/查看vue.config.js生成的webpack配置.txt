当你想知道自己的 vue-config.js 里的配置到底对不对的时候，你可以在命令行里执行vue inspect > output.js,它会将你最终生成的config展现在output.js之中，不过它默认显示的是开发环境的配置。

如果你想查看其它环境的配置可以通过vue inspect --mode production > output.js。在写构建配置的时候这个功能很有帮助，同时也能帮助你了解vue-cli在构建时到底帮你做了些什么。
