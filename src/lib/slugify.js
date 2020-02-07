const slugify = value =>
    value
        .replace(/([A-Z])/gm, '-$1')
        .replace(/([^a-zA-Z0-9])/gm, '-')
        .replace(/-+/gm, '-')
        .replace(/^-*(.*)-*$/gm, '$1')
        .toLowerCase();

export default slugify;
