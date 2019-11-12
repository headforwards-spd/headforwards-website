const gatsbyPluginSass = require('./gatsby/gatsby-plugin-sass');
// const gatsbySourceWordpress = require('./gatsby/gatsby-source-wordpress');
const gatsbySourceFilesystemWordpress = require('./gatsby/gatsby-source-filesystem.wp-content');
const gatsbySourceFilesystemUploads = require('./gatsby/gatsby-source-filesystem.uploads');
const gatsbySourceFilesystemPages = require('./gatsby/gatsby-source-filesystem.pages');
const gatsbyTransformerRemark = require('./gatsby/gatsby-transformer-remark');
const gatsbyTransformerYaml = require('./gatsby/gatsby-transformer-yaml');
const gatsbyPluginManifest = require('./gatsby/gatsby-plugin-manifest');
const gatsbyPluginNetlifyCms = require('./gatsby/gatsby-plugin-netlify-cms');
const gatsbyPluginSitemap = require('./gatsby/gatsby-plugin-sitemap');
const gatsbyPluginRobotsTxt = require('./gatsby/gatsby-plugin-robots-txt');
const gatsbyPluginOffline = require('./gatsby/gatsby-plugin-offline');

module.exports = {
    siteMetadata: {
        siteUrl: `https://headforwards-website.netlify.com`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        { ...gatsbyPluginSass },
        `gatsby-plugin-svgr`,
        'gatsby-plugin-sharp',
        // keep as first gatsby-source-filesystem plugin for gatsby image support
        // { ...gatsbySourceWordpress },
        { ...gatsbySourceFilesystemWordpress },
        { ...gatsbySourceFilesystemUploads },
        { ...gatsbySourceFilesystemPages },
        'gatsby-transformer-sharp',
        { ...gatsbyTransformerRemark },
        { ...gatsbyTransformerYaml },
        `gatsby-transformer-remark-linked-pages`,
        `gatsby-transformer-yaml-menu`, // must be after other CSS plugins
        { ...gatsbyPluginManifest },
        { ...gatsbyPluginOffline },
        { ...gatsbyPluginNetlifyCms }, // make sure to keep it last in the array
        { ...gatsbyPluginSitemap },
        { ...gatsbyPluginRobotsTxt },
        `gatsby-plugin-netlify-cache`,
        'gatsby-plugin-netlify',
    ],
};
