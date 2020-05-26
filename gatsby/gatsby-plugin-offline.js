module.exports = {
    resolve: `gatsby-plugin-offline`,
    options: {
        workboxConfig: {
            navigateFallbackBlacklist: [/^\/admin/, /\/$/],
        },
    },
};
