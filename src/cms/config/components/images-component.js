const imagesComponent = {
    label: 'Images',
    name: 'images-component',
    widget: 'object',
    fields: [
        {
            label: 'Flip images?',
            name: 'flip',
            widget: 'boolean',
            required: false,
            'default:false': null,
        },
        {
            label: 'Image One',
            name: 'imageOne',
            widget: 'image',
        },
        {
            label: 'Image Two',
            name: 'imageTwo',
            widget: 'image',
            required: false,
            default: null,
        },
    ],
};

export default imagesComponent;
