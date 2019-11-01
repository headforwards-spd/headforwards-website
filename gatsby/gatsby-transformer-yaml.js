module.exports = {
    resolve: 'gatsby-transformer-yaml',
    options: {
        plugins: [
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    path: `${__dirname}/../src/data`,
                },
            },
        ],
    },
};
