import { string } from 'yup';

export const messages = {
    success: job => `All done! Your application for the ${job} position is submitted successfully.`,
    error: 'There was an error trying to send your message. Please try again later.',
};

export const schema = {
    name: {
        field: {
            name: 'name',
            label: 'Full name',
            type: 'text',
            required: true,
        },
        validation: string().required('This field is Required.'),
    },
    email: {
        field: {
            name: 'email',
            label: 'Email address',
            type: 'email',
            required: true,
        },
        validation: string()
            .email('Must be a valid email.')
            .required('This field is Required.'),
    },
    phone: {
        field: {
            name: 'phone',
            label: 'Phone number',
            type: 'tel',
        },
        validation: string(),
    },
    photo: {
        field: {
            name: 'photo',
            label: 'Photo',
            type: 'file',
            accept: '.png,.jpg,.jpeg',
            placeholder: 'We accept PNG, .JPG and .JPEG files',
        },
        validation: string(),
    },
    cv: {
        field: {
            name: 'cv',
            type: 'file',
            accept: '.doc,.docx,.pdf,.odt,.rtf,.txt,.png,.jpg',
            placeholder: 'We accept PDF, DOC, DOCX, JPG and PNG files',
        },
        validation: string(),
    },
    cover_letter: {
        field: {
            name: 'cover_letter',
            // label: 'Cover letter',
            type: 'textarea',
            rows: 6,
        },
        validation: string(),
    },
    privacy: {
        field: {
            name: 'privacy',
            label: 'I agree to the terms outlined in the privacy policy.',
            value: '212',
            type: 'checkbox',
            required: true,
        },
        validation: string()
            .test(
                'privacy',
                'You must agree to the privacy policy.',
                value => value && value.includes(schema.privacy.field.value)
            )
            .required('You must agree to the privacy policy.'),
    },
};
