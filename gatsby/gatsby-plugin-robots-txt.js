module.exports = {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
        policy: [{ userAgent: '*', disallow: '/admin/' }],
    },
};
