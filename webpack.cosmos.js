const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = config => {
    config.module.rules.push({
        exclude: [/node_modules\/(?!(gatsby)\/)/],
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [require.resolve('@babel/preset-react'), require.resolve('@babel/preset-env')],
                    plugins: [
                        require.resolve('@babel/plugin-proposal-class-properties'),
                        require.resolve('babel-plugin-remove-graphql-queries'),
                    ],
                },
            },
        ],
    });

    config.plugins.push(new CopyWebpackPlugin([{ from: 'static' }]));

    config.resolve.mainFields = ['browser', 'module', 'main'];
    const cssLoaderIndex = config.module.rules.findIndex(rule => rule.test.source === `\\.css$`);
    if (!Number.isInteger(cssLoaderIndex)) {
        throw new Error("Could not find Storybook's CSS loader");
    }
    config.module.rules[cssLoaderIndex].exclude = /\.module\.css$/;
    config.module.rules.push({
        test: /\.scss$/,
        loaders: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                },
            },
            require.resolve('sass-loader'),
        ],
    });
    // remove svg from existing rule
    config.module.rules = config.module.rules.map(rule => {
        if (String(rule.test).includes('svg')) {
            return {
                ...rule,
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
            };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
};
