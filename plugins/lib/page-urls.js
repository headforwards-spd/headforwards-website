exports.getUrls = pages => {
    const urls = {};

    pages.forEach(page => {
        const { frontmatter } = page || {};
        const { uuid, path } = frontmatter || {};
        if (!uuid || !path) {
            return;
        }

        urls[uuid] = path;
    });

    return urls;
};

exports.getUrl = (urls, link) => {
    const { [link]: url = null } = urls || {};

    return url;
};
