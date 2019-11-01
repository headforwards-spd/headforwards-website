module.exports = {
    resolve: 'gatsby-transformer-remark',
    options: {
        plugins: [
            {
                resolve: 'gatsby-remark-relative-images',
                options: {
                    name: 'uploads',
                },
            },
            {
                resolve: 'gatsby-remark-images',
                options: {
                    // It's important to specify the maxWidth (in pixels) of
                    // the content container as this plugin uses this as the
                    // base for generating different widths of each image.
                    maxWidth: 2880,
                },
            },
            {
                resolve: 'gatsby-remark-copy-linked-files',
                options: {
                    destinationDir: 'static',
                },
            },
        ],
    },
};
