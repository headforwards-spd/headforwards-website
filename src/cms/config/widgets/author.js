export const authorLink = {
    widget: 'relation',
    collection: 'author-pages',
    searchFields: ['name'],
    valueField: 'uuid',
    displayFields: ['name'],
};

const author = {
    label: 'Author',
    name: 'author',
    ...authorLink,
};

export default author;
