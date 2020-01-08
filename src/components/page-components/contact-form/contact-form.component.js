import { string } from 'prop-types';
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';
import Reaptcha from 'reaptcha';
import { object } from 'yup';
import axios from 'axios';
import qs from 'querystring';
import schema from './contact-form.schema';
import { Input, Textarea, Checkbox } from './form-field.component';

export default class ContactForm extends Component {
    rcRef = createRef();

    static propTypes = {
        formName: string.isRequired,
    };

    state = {
        data: null,
        isSubmitting: false,
    };

    onVerify(token) {
        console.log('onVerify');

        const { data } = this.state;
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({ ...data, 'g-recaptcha-response': token }),
            url: '/',
        };

        axios(options)
            .then(console.info)
            .catch(error => console.error('axios.catch', error))
            .finally(() => this.setState({ isSubmitting: false, data: null }));
    }

    onSubmit(values) {
        console.log('onSubmit');

        const { rcRef } = this;

        this.setState({ isSubmitting: true });

        Promise.resolve({
            ...values,
            'bot-field': values['bot-field'],
            'form-name': values['form-name'],
        })
            .then(data => this.setState({ data }))
            .then(() => rcRef.current.execute())
            .catch(error => {
                this.setState({ isSubmitting: false });
                console.error('Reaptcha.execute', error);
            });
    }

    render() {
        const { formName } = this.props;
        const { isSubmitting } = this.state;
        const { onVerify, rcRef } = this;
        const rcProps = {
            ref: rcRef,
            sitekey: '6Lc_M80UAAAAAAVKfHMS3d2MC9rGglvTEHm46wpA', // process.env.SITE_RECAPTCHA_KEY,
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
                    data-netlify-honeypot="bot-field"
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
                            <Input {...schema.name.field} disabled={isSubmitting} />
                            <Input {...schema.business.field} disabled={isSubmitting} />
                        </section>
                        <section>
                            <Input {...schema.phone.field} disabled={isSubmitting} />
                            <Input {...schema.email.field} disabled={isSubmitting} />
                        </section>
                        <Textarea {...schema.enquiry.field} disabled={isSubmitting} />
                        <Checkbox {...schema.privacy.field} disabled={isSubmitting} />
                        <Checkbox {...schema.marketing.field} disabled={isSubmitting} />
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
