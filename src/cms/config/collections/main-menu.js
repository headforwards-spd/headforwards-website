const mainMenu = {
    file: 'src/data/main-menu.yml',
    label: 'Main Menu',
    name: 'main-menu',
    create: false,
    delete: false,
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'hidden',
            default: 'main-menu',
        },
        {
            label: 'Items',
            name: 'menu',
            widget: 'list',
            fields: [
                {
                    label: 'Label',
                    name: 'linkText',
                    widget: 'string',
                    default: 'Read more',
                },
                {
                    label: 'Link',
                    name: 'link',
                    widget: 'relation',
                    collection: 'info-pages',
                    searchFields: ['title'],
                    valueField: 'uuid',
                    displayFields: ['title'],
                },
                {
                    label: 'Children',
                    name: 'children',
                    widget: 'list',
                    fields: [
                        {
                            label: 'Label',
                            name: 'linkText',
                            widget: 'string',
                            default: 'Read more',
                        },
                        {
                            label: 'Link',
                            name: 'link',
                            widget: 'relation',
                            collection: 'info-pages',
                            searchFields: ['title'],
                            valueField: 'uuid',
                            displayFields: ['title'],
                        },
                        {
                            label: 'Children',
                            name: 'children',
                            widget: 'list',
                            fields: [
                                {
                                    label: 'Label',
                                    name: 'linkText',
                                    widget: 'string',
                                    default: 'Read more',
                                },
                                {
                                    label: 'Link',
                                    name: 'link',
                                    widget: 'relation',
                                    collection: 'info-pages',
                                    searchFields: ['title'],
                                    valueField: 'uuid',
                                    displayFields: ['title'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default mainMenu;
