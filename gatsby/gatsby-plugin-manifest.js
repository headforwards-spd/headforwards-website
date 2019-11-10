module.exports = {
    resolve: `gatsby-plugin-manifest`,
    options: {
        name: 'Headforwards',
        short_name: 'Headforwards',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFB800',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'minimal-ui',
        icon: 'static/images/icon.png', // This path is relative to the root of the site.
        icon_options: {
            // For all the options available, please see:
            // https://developer.mozilla.org/en-US/docs/Web/Manifest
            // https://w3c.github.io/manifest/#purpose-member
            purpose: `any maskable`,
        },
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
    },
};
