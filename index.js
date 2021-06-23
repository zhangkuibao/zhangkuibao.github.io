const routerConfig = {
    '编程基础': {
        routerUrl: 'baseProgramer',
        children: {
            '编程语言': {
                routerUrl: 'programeLanguage',
                children: {
                    css: {
                        routerUrl: 'css',
                        children: {
                            '0-笔记': {
                                routerUrl: 'note',
                                children: {
                                    '1-选择器': {
                                        routerUrl: 'selector',
                                        template: '1-选择器.md'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } 
    }
}
