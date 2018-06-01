const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');

const productionConfig = function (env) {
    const NODE_ENV = env.NODE_ENV ? env.NODE_ENV : 'development';
    return {
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        })
    };
}

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfig);
