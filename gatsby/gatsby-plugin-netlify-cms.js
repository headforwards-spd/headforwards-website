const { setBranchEnvironment } = require('./set-branch-environment');

setBranchEnvironment();

module.exports = {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
        manualInit: true,
        modulePath: `${__dirname}/../src/cms/cms.js`,
        stylesPath: [`${__dirname}/../src`, 'node_modules'],
        enableIdentityWidget: true,
        publicPath: '/admin/',
        htmlTitle: 'Content Manager',
        includeRobots: false,
    },
};
