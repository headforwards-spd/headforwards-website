module.exports = {
    resolve: 'gatsby-transformer-remark',
    options: {
        plugins: [
            'gatsby-remark-unwrap-images',
            `gatsby-remark-relative-images`,
            `gatsby-remark-copy-linked-files`,
            {
                resolve: `gatsby-remark-images`,
                options: {
                    // It's important to specify the maxWidth (in pixels) of
                    // the content container as this plugin uses this as the
                    // base for generating different widths of each image.
                    maxWidth: 1024,
                    maxHeight: 640,
                    withWebp: true,
                },
            },
        ],
    },
};
