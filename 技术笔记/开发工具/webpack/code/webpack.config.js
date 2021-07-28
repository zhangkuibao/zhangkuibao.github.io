const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.ts',
    },
    output: {
        library: 'MeLibrary',
        iife: true
    }
}