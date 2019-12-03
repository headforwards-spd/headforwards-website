const gatsbyPluginSass = require('./gatsby/gatsby-plugin-sass');
// const gatsbySourceWordpress = require('./gatsby/gatsby-source-wordpress');
// const gatsbySourceFilesystemWordpress = require('./gatsby/gatsby-source-filesystem.wp-content');
const gatsbySourceFilesystemUploads = require('./gatsby/gatsby-source-filesystem.uploads');
const gatsbySourceFilesystemImages = require('./gatsby/gatsby-source-filesystem.images');
const gatsbySourceFilesystemPages = require('./gatsby/gatsby-source-filesystem.pages');
const gatsbySourceFilesystemData = require('./gatsby/gatsby-source-filesystem.data');
const gatsbyTransformerRemark = require('./gatsby/gatsby-transformer-remark');
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
        // Import WordPress Posts
        // { ...gatsbySourceWordpress },
        // Use WordPress Images
        // { ...gatsbySourceFilesystemWordpress },
        `gatsby-source-recruitee-api`,
        { ...gatsbySourceFilesystemImages },
        { ...gatsbySourceFilesystemUploads },
        { ...gatsbySourceFilesystemPages },
        { ...gatsbySourceFilesystemData },
        'gatsby-transformer-sharp',
        { ...gatsbyTransformerRemark },
        'gatsby-transformer-yaml',
        'gatsby-transformer-json',
        `gatsby-transformer-remark-linked-pages`,
        `gatsby-transformer-yaml-menu`,
        { ...gatsbyPluginManifest },
        { ...gatsbyPluginOffline },
        { ...gatsbyPluginSitemap },
        { ...gatsbyPluginRobotsTxt },
        { ...gatsbyPluginNetlifyCms },
        `gatsby-plugin-netlify-cache`,
        'gatsby-plugin-netlify',
    ],
};
