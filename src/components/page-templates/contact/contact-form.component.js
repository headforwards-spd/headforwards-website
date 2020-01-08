import { any } from 'prop-types';
import React, { Component, createRef } from 'react';
import { Formik, Form, useField, Field } from 'formik';
import Reaptcha from 'reaptcha';
import { object } from 'yup';
import axios from 'axios';
import styles from './contact.module.scss';

export default class ContactForm extends Component {
    static propTypes = {
        formName: any,
        schema: any,
    };

    state = {
        data: null,
        isSubmitting: false,
    };

    rcRef = createRef();

    onVerify(token) {
        console.log('onVerify');

        const { data } = this.state;
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: JSON.stringify({ ...data, 'g-recaptcha-response': token }),
            url: '/',
        };

        axios(options)
            .then(console.info)
            .catch(console.error)
            .finally(() => this.setState({ isSubmitting: false, data: null }));
    }

    onSubmit(values) {
        console.log('onSubmit');

        const { schema } = this.props;

        this.setState({ isSubmitting: true });

        Promise.resolve({
            [schema.name.field.label]: values.name,
            [schema.business.field.label]: values.business,
            [schema.phone.field.label]: values.phone,
            [schema.email.field.label]: values.email,
            [schema.enquiry.field.label]: values.enquiry,
            [schema.privacy.field.label]: values.privacy.length ? 'Yes' : 'No',
            [schema.marketing.field.label]: values.marketing.length ? 'Yes' : 'No',
            'bot-field': values['bot-field'],
            'form-name': values['form-name'],
        })
            .then(data => this.setState({ data }))
            .then(() => this.rcRef.current.execute())
            .catch(error => {
                this.setState({ isSubmitting: false });
                console.error(error);
            });
    }

    render() {
        const { formName, schema } = this.props;
        const { isSubmitting } = this.state;
        const { onVerify, rcRef } = this;
        const rcProps = {
            ref: rcRef,
            sitekey: '6Lc_M80UAAAAAAVKfHMS3d2MC9rGglvTEHm46wpA',
            size: 'invisible',
            onVerify: onVerify.bind(this),
        };

        const initialValues = {};
        const validation = {};
        Object.keys(schema).forEach(key => {
            initialValues[key] = '';
            validation[key] = schema[key].validation;
        });

        const formConfig = {
            initialValues: {
                ...initialValues,
                'bot-field': '',
                'form-name': formName,
            },
            validationSchema: object(validation),
            onSubmit: this.onSubmit.bind(this),
        };

        return (
            <>
                <form
                    name={formName}
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                    netlify-honeypot="bot-field"
                    hidden
                >
                    {Object.keys(schema).map(key => (
                        <input key={key} type="text" name={key} />
                    ))}
                    <input name="bot-field" type="hidden" />
                </form>
                <Formik {...formConfig}>
                    <Form noValidate>
                        <h1>Send us a message...</h1>
                        <Field type="hidden" name="bot-field" />
                        <Field type="hidden" name="form-name" />
                        <section>
                            <FormInput {...schema.name.field} disabled={isSubmitting} />
                            <FormInput {...schema.business.field} disabled={isSubmitting} />
                        </section>
                        <section>
                            <FormInput {...schema.phone.field} disabled={isSubmitting} />
                            <FormInput {...schema.email.field} disabled={isSubmitting} />
                        </section>
                        <FormTextarea {...schema.enquiry.field} disabled={isSubmitting} />
                        <FormCheckbox {...schema.privacy.field} disabled={isSubmitting} />
                        <FormCheckbox {...schema.marketing.field} disabled={isSubmitting} />
                        <Reaptcha {...rcProps} />
                        <button type="submit" disabled={isSubmitting}>
                            Send form
                        </button>
                    </Form>
                </Formik>
            </>
        );
    }
}

function FormInput({ label, disabled, required: isRequired, ...props }) {
    const [field, meta] = useField(props);
    const { name } = props;

    return (
        <label htmlFor={name}>
            {label} {isRequired && '*'}
            <input id={name} {...field} {...props} disabled={disabled} />
            <FormError {...meta} />
        </label>
    );
}

function FormTextarea({ label, disabled, required: isRequired, ...props }) {
    const [field, meta] = useField(props);
    const { name } = props;

    return (
        <label htmlFor={name}>
            {label} {isRequired && '*'}
            <textarea id={name} {...field} {...props} disabled={disabled} />
            <FormError {...meta} />
        </label>
    );
}

function FormCheckbox({ label, disabled, required: isRequired, ...props }) {
    const [field, meta] = useField({ ...props, value: label });
    const { name } = props;

    return (
        <label htmlFor={name} className={styles.checkbox}>
            <input id={name} {...field} {...props} disabled={disabled} />
            {label} {isRequired && '*'}
            <FormError {...meta} />
        </label>
    );
}

function FormError({ touched, error }) {
    return touched && error ? <div className={styles.error}>{error}</div> : null;
}
