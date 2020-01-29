import { faCheckCircle, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { string } from 'prop-types';
import qs from 'querystring';
import React, { Component, createRef } from 'react';
import Reaptcha from 'reaptcha';
import { object } from 'yup';

import { Checkbox, Input, Textarea } from '../form-field.component';
import styles from './contact-form.module.scss';
import { messages, schema } from './contact-form.schema';

export default class ContactForm extends Component {
    rcRef = createRef();

    resetForm = null;

    static propTypes = {
        formName: string.isRequired,
    };

    state = {
        data: null,
        isSubmitting: false,
        successMessage: null,
        errorMessage: null,
    };

    onVerify(token) {
        const { data } = this.state;
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({ ...data, 'g-recaptcha-response': token }),
            url: '/',
        };

        this.rcRef.current.reset();
        this.setState({ isSubmitting: true });

        axios(options)
            .then(
                ({ status }) =>
                    (status === 200 && Promise.resolve()) || Promise.reject(`${status} Error submitting form.`)
            )
            .then(() => {
                this.resetForm();
                this.setState({
                    isSubmitting: false,
                    data: null,
                    successMessage: messages.success,
                });
            })
            .catch(error => {
                this.setState({
                    isSubmitting: false,
                    data: null,
                    errorMessage: 'There was an error trying to send your message. Please try again later.',
                });
                console.error(error);
            })
            .finally(() => {
                this.resetForm = null;
            });
    }

    onSubmit(values, { resetForm }) {
        const { rcRef } = this;

        this.resetForm = resetForm;

        Promise.resolve({
            ...values,
            'bot-field': values['bot-field'],
            'form-name': values['form-name'],
        })
            .then(data => this.setState({ data, errorMessage: null, successMessage: null }))
            .then(() => rcRef.current.execute())
            .catch(error => {
                this.resetForm = null;
                this.setState({ isSubmitting: false, errorMessage: messages.recaptchaError });
                console.error('Reaptcha.execute', error);
            });
    }

    render() {
        const { formName } = this.props;
        const { isSubmitting, successMessage, errorMessage } = this.state;
        const { onVerify, onSubmit, rcRef } = this;
        const rcProps = {
            ref: rcRef,
            sitekey: '6Lc_M80UAAAAAAVKfHMS3d2MC9rGglvTEHm46wpA',
            size: 'invisible',
            onVerify: onVerify.bind(this),
            onError: () => this.setState({ errorMessage: 'reCAPTCHA verfication error.' }),
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
            onSubmit: onSubmit.bind(this),
        };

        const submittingClass = isSubmitting ? styles.isSubmitting : '';

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
                    {({ handleSubmit, isValid }) => {
                        const hasError = !isValid;

                        const errorClass = hasError ? styles.error : '';

                        const handleChange = () => {
                            const { errorMessage: currentError, successMessage: currentSuccess } = this.state;
                            const hasMessage = currentError || currentSuccess;

                            hasMessage &&
                                this.setState({
                                    errorMessage: null,
                                    successMessage: null,
                                });
                        };

                        return (
                            <Form
                                onSubmit={handleSubmit}
                                onChange={handleChange}
                                className={`${styles.contactForm} ${errorClass} ${submittingClass}`}
                                noValidate
                            >
                                <h2>Send us a message...</h2>
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
                                <Textarea
                                    {...schema.enquiry.field}
                                    disabled={isSubmitting}
                                    className={styles.fullWidth}
                                />
                                    <Checkbox {...schema.privacy.field} disabled={isSubmitting} />
                                    <Checkbox {...schema.marketing.field} disabled={isSubmitting} />
                                    <div role="group" className={styles.submit}>
                                        <Reaptcha {...rcProps} className={styles.recaptcha} />
                                        <button type="submit" disabled={isSubmitting}>
                                            Send form
                                            {isSubmitting && <FontAwesomeIcon icon={faSpinner} spin />}
                                        </button>
                                        <div className={styles.messages}>
                                            {isValid && !errorMessage && !successMessage && (
                                                <>
                                                    <abbr title="required">*&nbsp;</abbr>
                                                    required fields
                                                </>
                                            )}
                                            {hasError && (
                                                <div className={styles.error}>
                                                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                                                    One or more fields have an error.
                                                </div>
                                            )}
                                            {errorMessage && (
                                                <div className={styles.error}>
                                                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                                                    {errorMessage}
                                                </div>
                                            )}
                                            {successMessage && (
                                                <div className={styles.success}>
                                                    <FontAwesomeIcon icon={faCheckCircle} size="lg" />
                                                    {successMessage}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                            </Form>
                        );
                    }}
                </Formik>
            </>
        );
    }
}
