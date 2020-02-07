import { faCheckCircle, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }                         from '@fortawesome/react-fontawesome';
import axios                                       from 'axios';
import { Form, Formik }                            from 'formik';
import { arrayOf, bool, number, shape, string }    from 'prop-types';
import React, { Component }                        from 'react';
import * as Yup                                    from 'yup';
import { applicationFormSubmitEvent }              from '../../../../lib/datalayer-event'

import { Checkbox, File, Input, Textarea } from '../form-field.component';
import styles from './application-form.module.scss';
import { messages, schema } from './application-form.schema';
import ApplicationQuestions from './application-questions/applicaton-questions.component';

export default class ApplicationForm extends Component {
    static propTypes = {
        jobTitle: string.isRequired,
        path: string.isRequired,
        options_phone: string,
        options_photo: string,
        options_cover_letter: string,
        options_cv: string,
        open_questions: arrayOf(
            shape({
                id: number.isRequired,
                kind: string.isRequired,
                required: bool.isRequired,
                open_question_options: arrayOf(
                    shape({
                        id: number.isRequired,
                        body: string.isRequired,
                    })
                ).isRequired,
            })
        ),
    };

    static defaultProps = {
        options_phone: null,
        options_photo: null,
        options_cover_letter: null,
        options_cv: null,
        open_questions: null,
    };

    state = {
        isSubmitting: false,
        successMessage: null,
        errorMessage: null,
    };

    onSubmit(data, { resetForm }) {
        const { path, jobTitle } = this.props;
        // eslint-disable-next-line camelcase
        const { name = '', email = '', phone = '', cv = '', cover_letter = '', privacy = '' } = data;
        const questions = Object.keys(data).filter(key => key.startsWith('q-'));

        const formData = new FormData();

        Object.keys({ name, email, phone, cv, cover_letter }).forEach(key =>
            formData.append(`candidate[${key}]`, data[key])
        );
        formData.append(`candidate[privacy][]`, privacy);
        questions.forEach((key, index) => {
            const id = key.replace('q-', '');
            const content = data[key];

            formData.append(`candidate[open_question_answers_attributes][${index}][open_question_id]`, id);
            if (typeof content === 'string') {
                formData.append(`candidate[open_question_answers_attributes][${index}][content]`, content);
            } else {
                content.map(value =>
                    formData.append(`candidate[open_question_answers_attributes][${index}][multi_content][]`, value)
                );
            }
        });

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData,
            url: `https://headforwards.recruitee.com/api/offers/${path}/candidates`,
        };

        this.setState({ isSubmitting: true });

        axios(options)
            .then(() => {
                resetForm();
                this.setState({
                    isSubmitting: false,
                    successMessage: messages.success(jobTitle),
                });
                applicationFormSubmitEvent(path);
            })
            .catch(({ response }) => {
                const { data: responseData } = response || {};
                const { error } = responseData || {};

                const errorMessage = error ? error.join('\n') : messages.error;

                this.setState({
                    isSubmitting: false,
                    errorMessage,
                });
            });
    }

    render() {
        const {
            options_phone: phoneOptions,
            options_photo: photoOptions,
            options_cover_letter: coverLetterOptions,
            options_cv: cvOptions,
            open_questions: questions,
        } = this.props;

        const showPhone = phoneOptions !== 'off';
        const phoneRequired = phoneOptions === 'required';

        const showPhoto = photoOptions !== 'off';
        const photoRequired = photoOptions === 'required';

        const showCoverLetter = coverLetterOptions !== 'off';
        const coverLetterRequired = coverLetterOptions === 'required';

        const showCv = cvOptions !== 'off';
        const cvRequired = cvOptions === 'required';

        const { isSubmitting, successMessage, errorMessage } = this.state;
        const { onSubmit } = this;

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
            initialValues,
            validationSchema: Yup.object(validation),
            onSubmit: onSubmit.bind(this),
        };

        const submittingClass = isSubmitting ? styles.isSubmitting : '';

        return (
            <>
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
                                className={`${styles.applicationForm} ${errorClass} ${submittingClass}`}
                                noValidate
                            >
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
                                        <p>
                                            <abbr title="required">*&nbsp;</abbr>
                                            required fields
                                        </p>
                                        <div role="group">
                                            <button type="submit" disabled={isSubmitting}>
                                                Submit application
                                                {isSubmitting && <FontAwesomeIcon icon={faSpinner} spin />}
                                            </button>
                                            <div className={styles.messages}>
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
