import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { string } from 'prop-types';
import qs from 'querystring';
import React, { Component, createRef } from 'react';
import Reaptcha from 'reaptcha';
import { object } from 'yup';
import { Checkbox, Input, Textarea } from '../contact-form/form-field.component';
import schema from './application-form.schema';
import styles from './application-form.module.scss';

export default class ApplicationForm extends Component {
    rcRef = createRef();

    resetform = null;

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
            .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
            .then(() => this.resetform())
            .catch(error => this.setState({ errorMessage: error }))
            .finally(() => {
                this.resetform = null;
                this.setState({ isSubmitting: false, data: null });
            });
    }

    onSubmit(values, { resetForm }) {
        const { rcRef } = this;

        this.resetform = resetForm;

        Promise.resolve({
            ...values,
            'bot-field': values['bot-field'],
            'form-name': values['form-name'],
        })
            .then(data => this.setState({ data, errorMessage: null, successMessage: null }))
            .then(() => rcRef.current.execute())
            .catch(error => {
                this.resetform = null;
                console.error('Reaptcha.execute', error);
            })
            .finally(console.info);
    }

    render() {
        const { options_phone: phoneOptions, options_cover_letter: coverLetterOptions } = this.props;

        const showPhone = phoneOptions !== 'off';
        const phoneRequired = phoneOptions === 'required';

        const showCoverLetter = coverLetterOptions !== 'off';
        const coverLetterRequired = coverLetterOptions === 'required';

        const { formName } = this.props;
        const { isSubmitting, successMessage, errorMessage } = this.state;
        const { onVerify, onSubmit, rcRef } = this;
        const rcProps = {
            ref: rcRef,
            sitekey: '6Lc_M80UAAAAAAVKfHMS3d2MC9rGglvTEHm46wpA', // process.env.SITE_RECAPTCHA_KEY,
            size: 'invisible',
            onVerify: onVerify.bind(this),
            onError: () => this.setState({ errorMessage: 'reCAPTCHA verfication error.' }),
            onExpire: event => console.info('rcOnExpire', event),
            onRender: event => console.info('rcOnRender', event),
        };

        const initialValues = {};
        const validation = {};
        Object.keys(schema).forEach(key => {
            initialValues[key] = '';
            validation[key] = schema[key].validation;
        });

        phoneRequired && (validation.phone = validation.phone.required('This is required.'));
        coverLetterRequired && (validation.cover_letter = validation.cover_letter.required('This is required.'));

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
                    type="file"
                    hidden
                >
                    {Object.keys(schema).map(key => (
                        <input key={key} type="text" name={key} />
                    ))}
                    <input name="bot-field" type="hidden" />
                </form>
                <Formik {...formConfig}>
                    <Form className={`${styles.applicationForm} ${submittingClass}`} noValidate>
                        <Field type="hidden" name="bot-field" />
                        <Field type="hidden" name="form-name" />
                        <section>
                            <header>
                                <h2>Personal information</h2>
                                <p>Tell us something about yourself</p>
                            </header>
                            <section>
                                <Input {...schema.name.field} disabled={isSubmitting} />
                                <Input {...schema.email.field} disabled={isSubmitting} />
                                {showPhone && (
                                    <Input {...schema.phone.field} disabled={isSubmitting} required={phoneRequired} />
                                )}
                            </section>
                        </section>
                        {/* <section> */}
                        {/*    <header> */}
                        {/*        <h2>CV / Resume</h2> */}
                        {/*        <p>Upload your CV or resume file</p> */}
                        {/*    </header> */}
                        {/*    <section> */}
                        {/*        <label className={styles.fileUpload} htmlFor="candidate-cv"> */}
                        {/*            <input */}
                        {/*                accept=".doc,.docx,.pdf,.odt,.rtf,.txt,.png,.jpg" */}
                        {/*                type="file" */}
                        {/*                id="candidate-cv" */}
                        {/*            /> */}
                        {/*            <button name="button" type="button"> */}
                        {/*                Add file */}
                        {/*            </button> */}
                        {/*            We accept PDF, DOC, DOCX, JPG and PNG files */}
                        {/*        </label> */}
                        {/*    </section> */}
                        {/* </section> */}
                        {/* <section> */}
                        {/*    <header> */}
                        {/*        <h2>CV / Resume</h2> */}
                        {/*        <p>Upload your CV or resume file</p> */}
                        {/*    </header> */}
                        {/*    <section> */}
                        {/*        <label className={styles.fileUpload}>[file icon] file-name.pdf [x]</label> */}
                        {/*    </section> */}
                        {/* </section> */}
                        {showCoverLetter && (
                            <section>
                                <header>
                                    <h2>Cover letter</h2>
                                    <p>Insert your cover letter here</p>
                                </header>
                                <section>
                                    <div role="group">
                                        <Textarea
                                            {...schema.cover_letter.field}
                                            required={coverLetterRequired}
                                            disabled={isSubmitting}
                                        />
                                        {/* <textarea rows="6" id="candidate_cover_letter" /> */}
                                    </div>
                                </section>
                            </section>
                        )}
                        {/* {!!questions.length && ( */}
                        {/*    <section> */}
                        {/*        <header> */}
                        {/*            <h2>Questions</h2> */}
                        {/*            <p>Please fill in additional questions</p> */}
                        {/*        </header> */}
                        {/*        <section className={styles.questions}> */}
                        {/*            {questions && <ApplicationQuestions questions={questions} />} */}
                        {/*        </section> */}
                        {/*    </section> */}
                        {/* )} */}
                        <section>
                            <section className={styles.submit}>
                                <div role="group">
                                    <Checkbox {...schema.privacy.field} disabled={isSubmitting} />
                                    <Reaptcha {...rcProps} />
                                    <button type="submit" className={styles.submit} disabled={isSubmitting}>
                                        Submit Application
                                    </button>
                                    {errorMessage && <div>{errorMessage}</div>}
                                    {successMessage && <div>{successMessage}</div>}
                                </div>
                            </section>
                        </section>
                    </Form>
                </Formik>
            </>
        );
    }
}
