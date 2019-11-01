module.exports = {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
        modulePath: `${__dirname}/../src/cms/cms.js`,
        stylesPath: [`${__dirname}/../src`, 'node_modules'],
    },
};
