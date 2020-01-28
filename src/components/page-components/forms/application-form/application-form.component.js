import { faSpinner, faTimesCircle, faCheckCircle }    from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }             from '@fortawesome/react-fontawesome';
import axios                           from 'axios';
import { Field, Form, Formik }         from 'formik';
import { string }                      from 'prop-types';
import React, { Component, createRef } from 'react';
import Reaptcha                        from 'reaptcha';
import * as Yup                        from 'yup';

import { Checkbox, File, Input, Textarea } from '../form-field.component';
import styles from './application-form.module.scss';
import { messages, schema } from './application-form.schema';
import ApplicationQuestions from './application-questions/applicaton-questions.component';

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
        const { job } = this.props;
        const { data } = this.state;
        const {
                  'bot-field': botField,
                  'form-name': formName,
                  name = '',
                  email = '',
                  phone = '',
                  cv = '',
                  cover_letter = '',
              } = data;
        const questions = Object.keys(data).filter(key => key.startsWith('q-'));

        const formData = new FormData();

        Object.keys({ name, email, phone, cv, cover_letter }).forEach(key => formData.append(`${key}`, data[key]));
        questions.forEach((key, index) => {
            const id = key.replace('q-', '');
            const content = data[key];

            formData.append(`questions[${id}]`, content);

            // formData.append(`candidate[open_question_answers_attributes][${index}][open_question_id]`, id);
            // if(typeof content === 'string') {
            //     formData.append(`candidate[open_question_answers_attributes][${index}][content]`, content);
            // } else {
            //     content.map(value => formData.append(`candidate[open_question_answers_attributes][${index}][][multi_content]`, value));
            // }
        });

        formData.append('bot-field', botField);
        formData.append('form-name', formName);
        formData.append('g-recaptcha-response', token);

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            // data: new FormData({ ...data, 'g-recaptcha-response': token }),
            data: formData,
            url: 'https://headforwards-website2.netlify.com/',
        };

        this.rcRef.current.reset();
        this.setState({ isSubmitting: true });

        axios(options)
            .then(
                ({ status }) =>
                    (status === 200 && Promise.resolve()) || Promise.reject(`${status} Error submitting form.`)
            )
            .then(() => new Promise(resolve => setTimeout(resolve, 10000)))
            .then(() => {
                this.resetform();
                this.setState({
                                  isSubmitting: false,
                                  data: null,
                                  successMessage: messages.success(job),
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
                this.resetform = null;
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
        const {
                  options_phone: phoneOptions,
                  options_photo: photoOptions,
                  options_cover_letter: coverLetterOptions,
                  options_cv: cvOptions,
                  open_questions: questions,
                  path,
              } = this.props;

        console.log({ props: this.props });

        const showPhone = phoneOptions !== 'off';
        const phoneRequired = phoneOptions === 'required';

        const showPhoto = photoOptions !== 'off';
        const photoRequired = photoOptions === 'required';

        const showCoverLetter = coverLetterOptions !== 'off';
        const coverLetterRequired = true || coverLetterOptions === 'required';

        const showCv = cvOptions !== 'off';
        const cvRequired = true || cvOptions === 'required';

        const { formName: baseFormName } = this.props;
        const formName = `${baseFormName}-${path}`;
        const { isSubmitting, successMessage, errorMessage } = this.state;
        const { onVerify, onSubmit, rcRef } = this;
        const rcProps = {
            ref: rcRef,
            sitekey: '6Lc_M80UAAAAAAVKfHMS3d2MC9rGglvTEHm46wpA', // process.env.SITE_RECAPTCHA_KEY,
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

        questions &&
        questions.forEach(({ id, kind, required }) => {
            let fieldValidation = kind !== 'multi_choice' ? Yup.string() : Yup.array();
            required && (fieldValidation = fieldValidation.required('This field is Required.'));

            initialValues[`q-${id}`] = kind !== 'multi_choice' ? '' : [];
            validation[`q-${id}`] = fieldValidation;
        });

        phoneRequired && (validation.phone = validation.phone.required('This field is Required.'));
        photoRequired && (validation.photo = validation.photo.required('This field is Required.'));
        cvRequired && (validation.cv = validation.cv.required('This field is Required.'));
        coverLetterRequired && (validation.cover_letter = validation.cover_letter.required('This field is Required.'));

        const formConfig = {
            initialValues: {
                ...initialValues,
                'bot-field': '',
                'form-name': formName,
            },
            validationSchema: Yup.object(validation),
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
                        <input key={key} type={['photo', 'cv'].includes(key) ? 'file' : 'text'} name={key} />
                    ))}
                    {!!questions.length &&
                     questions.map(question => (
                         <input key={question.id} type="text" name={`questions[${question.id}]`} />
                     ))}
                    <input name="bot-field" type="hidden" />
                </form>
                <Formik {...formConfig}>
                    {props => {
                        const { handleSubmit, isValid } = props;

                        const hasError = !isValid;

                        const errorClass = hasError ? styles.error : '';

                        return (
                            <Form
                                onSubmit={handleSubmit}
                                onChange={() => {
                                    const { errorMessage: currentError, successMessage: currentSuccess } = this.state;

                                    console.log('onchange', { currentError, currentSuccess });

                                    (currentError || currentSuccess) &&
                                    this.setState({
                                                      errorMessage: null,
                                                      successMessage: null,
                                                  });
                                }}
                                className={`${styles.applicationForm} ${errorClass} ${submittingClass}`}
                                noValidate
                            >
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
                                            <Input
                                                {...schema.phone.field}
                                                required={phoneRequired}
                                                disabled={isSubmitting}
                                            />
                                        )}
                                        {showPhoto && (
                                            <File
                                                {...schema.photo.field}
                                                required={photoRequired}
                                                disabled={isSubmitting}
                                            />
                                        )}
                                    </section>
                                </section>
                                {showCv && (
                                    <section>
                                        <header>
                                            <h2>
                                                CV / Resume
                                                {cvRequired && <abbr title="required">&nbsp;*</abbr>}
                                            </h2>
                                            <p>Upload your CV or resume file</p>
                                        </header>
                                        <section>
                                            <File {...schema.cv.field} required={cvRequired} disabled={isSubmitting} />
                                        </section>
                                    </section>
                                )}
                                {showCoverLetter && (
                                    <section>
                                        <header>
                                            <h2>
                                                Cover letter
                                                {coverLetterRequired && <abbr title="required">&nbsp;*</abbr>}
                                            </h2>
                                            <p>Insert your cover letter here</p>
                                        </header>
                                        <section>
                                            <Textarea
                                                className={styles.fullWidth}
                                                {...schema.cover_letter.field}
                                                required={coverLetterRequired}
                                                disabled={isSubmitting}
                                            />
                                        </section>
                                    </section>
                                )}
                                {!!questions.length && (
                                    <section>
                                        <header>
                                            <h2>Questions</h2>
                                            <p>Please fill in additional questions</p>
                                        </header>
                                        <section className={styles.questions}>
                                            {questions && (
                                                <ApplicationQuestions
                                                    questions={questions}
                                                    isSubmitting={isSubmitting}
                                                />
                                            )}
                                        </section>
                                    </section>
                                )}
                                <section>
                                    <section className={styles.submit}>
                                        <Checkbox {...schema.privacy.field} disabled={isSubmitting} />
                                        <div role="group">
                                            <Reaptcha {...rcProps} className={styles.recaptcha} />
                                            <button type="submit" disabled={isSubmitting}>
                                                Submit application
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
                                    </section>
                                </section>
                            </Form>
                        );
                    }}
                </Formik>
            </>
        );
    }
}
