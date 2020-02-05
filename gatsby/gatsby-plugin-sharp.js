module.exports = {
    resolve: `gatsby-plugin-sharp`,
    options: {
        defaultQuality: 75,
        srcSetBreakpoints: [
            288, // < 320
            714, // < 768
            947, // < 1024
            1170, // < 1254px
            1440,
        ],
    },
};
