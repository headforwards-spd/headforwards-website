const sitePassword = process.env.SITE_PASSWORD || null;
const config = {
    resolve: `gatsby-plugin-netlify`,
    options: {
        headers: {
            '/images/*': ['cache-control: public, max-age=31536000, immutable'],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    },
};

sitePassword && (config.options.headers['/*'] = [`Basic-Auth: login:${sitePassword}`]);

module.exports = config;
