module.exports = {
    resolve: 'gatsby-transformer-remark',
    options: {
        plugins: [
            'gatsby-remark-unwrap-images',
            `gatsby-remark-relative-images`,
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-images`,
        ],
    },
};
