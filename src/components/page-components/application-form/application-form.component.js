import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { string } from 'prop-types';
import qs from 'querystring';
import React, { Component, createRef } from 'react';
import Reaptcha from 'reaptcha';
import { object } from 'yup';
import Link from '../../page-layout/link/link.component';
import { Checkbox, Input, Textarea } from '../contact-form/form-field.component';
import schema from './application-form.schema';
import styles from './application-form.module.scss';

export default class ApplicationForm extends Component {
    rcRef = createRef();

    static propTypes = {
        formName: string.isRequired,
    };

    state = {
        data: null,
        isSubmitting: false,
    };

    onVerify(token) {
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
        console.log({ props: this.props });

        const { options_phone: phoneOptions, options_cover_letter: coverLetterOptions } = this.props;

        const showPhone = phoneOptions !== 'off';
        const phoneRequired = phoneOptions === 'required';

        const showCoverLetter = coverLetterOptions !== 'off';
        const coverLetterRequired = coverLetterOptions === 'required';

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

        phoneRequired && (validation.phone = validation.phone.required('This is required.'));
        coverLetterRequired && (validation.cover_letter = validation.cover_letter.required('This is required.'));

        console.log({ coverLetterOptions });

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
                    <Form className={styles.applicationForm} noValidate>
                        <Field type="hidden" name="bot-field" />
                        <Field type="hidden" name="form-name" />
                        <section>
                            <header>
                                <h2>Personal information</h2>
                                <p>Tell us something about yourself</p>
                            </header>
                            <section>
                                <Input {...schema.name.field} disabled={isSubmitting} />
                                {/* <label htmlFor="candidate-name"> */}
                                {/*    Full name */}
                                {/*    <input type="text" id="candidate-name" /> */}
                                {/* </label> */}
                                <Input {...schema.email.field} disabled={isSubmitting} />
                                {/* <label htmlFor="candidate-email"> */}
                                {/*    Email address */}
                                {/*    <input type="email" id="candidate-email" /> */}
                                {/* </label> */}
                                {showPhone && (
                                    <Input {...schema.phone.field} disabled={isSubmitting} required={phoneRequired} />
                                )}
                                {/* <label htmlFor="candidate-phone"> */}
                                {/*    Phone number */}
                                {/*    <input type="tel" id="candidate-phone" /> */}
                                {/* </label> */}
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
                                    {/* <label className={styles.fullWidth} htmlFor="candidate-terms"> */}
                                    {/*    <input required="required" type="checkbox" id="candidate-terms" /> */}
                                    {/*    I agree to the&nbsp; */}
                                    {/*    <Link to="/privacy-notice/" target="_blank"> */}
                                    {/*        Privacy Policy */}
                                    {/*    </Link> */}
                                    {/* </label> */}
                                    <Reaptcha {...rcProps} />
                                    <button type="submit" className={styles.submit} disabled={isSubmitting}>
                                        Submit Application
                                    </button>
                                </div>
                            </section>
                        </section>
                    </Form>
                </Formik>
            </>
        );
    }
}
