import { string } from 'yup';

const schema = {
    name: {
        field: {
            name: 'name',
            label: 'Full name',
            type: 'text',
            required: true,
        },
        validation: string().required('This is required.'),
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
            .required('This is required.'),
    },
    phone: {
        field: {
            name: 'phone',
            label: 'Phone number',
            type: 'tel',
        },
        validation: string(),
    },
    cover_letter: {
        field: {
            name: 'cover_letter',
            type: 'textarea',
            rows: 6,
        },
        validation: string(),
    },
    privacy: {
        field: {
            name: 'privacy',
            label: 'I agree to the terms outlined in the privacy policy.',
            type: 'checkbox',
            required: true,
        },
        validation: string()
            .test('privacy', 'You must agree to the privacy policy.', value => value === schema.privacy.field.label)
            .required('You must agree to the privacy policy.'),
    },
};
export default schema;
