module.exports = {
    resolve: 'gatsby-source-filesystem',
    options: {
        path: `${__dirname}/../static/wp-content`,
        name: 'wp-content',
    },
};
