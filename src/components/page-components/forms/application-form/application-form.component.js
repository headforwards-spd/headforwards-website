import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import React, { Component } from 'react';
import * as Yup from 'yup';

import { applicationFormSubmitEvent } from '../../../../lib/datalayer-event';
import { Checkbox, File, Input } from '../form-field.component';
import styles from './application-form.module.scss';
import { messages, requiredText, schema } from './application-form.schema';
import CoverLetteSecton from './application-sections/cover-letter-section.component';
import CvSection from './application-sections/cv-section.component';
import ErrorSection from './application-sections/error-section.component';
import FieldErrorSection from './application-sections/field-error-section.component';
import QuestionSection from './application-sections/question-section.component';
import SuccessSection from './application-sections/success-section.component';

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

        Object.keys({
            name,
            email,
            phone,
            cv,
            cover_letter,
        }).forEach(key => formData.append(`candidate[${key}]`, data[key]));
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

    getFormConfig() {
        const { onSubmit } = this;
        const {
            options_phone: phoneOptions,
            options_photo: photoOptions,
            options_cover_letter: coverLetterOptions,
            options_cv: cvOptions,
            open_questions: questions,
        } = this.props;

        const initialValues = {};
        const validation = {};

        Object.keys(schema).forEach(key => {
            initialValues[key] = '';
            validation[key] = schema[key].validation;
        });

        const phoneRequired = phoneOptions === 'required';
        const photoRequired = photoOptions === 'required';
        const coverLetterRequired = coverLetterOptions === 'required';
        const cvRequired = cvOptions === 'required';

        validation.phone = phoneRequired ? validation.phone.required(requiredText) : phoneRequired;
        validation.photo = photoRequired ? validation.photo.required(requiredText) : photoRequired;
        validation.cv = cvRequired ? validation.cv.required(requiredText) : cvRequired;
        validation.cover_letter = coverLetterRequired
            ? validation.cover_letter.required(requiredText)
            : coverLetterRequired;

        questions.forEach(({ id, kind, required }) => {
            let fieldValidation = kind !== 'multi_choice' ? Yup.string() : Yup.array();
            fieldValidation = required ? fieldValidation.required(requiredText) : fieldValidation;

            initialValues[`q-${id}`] = kind !== 'multi_choice' ? '' : [];
            validation[`q-${id}`] = fieldValidation;
        });

        return {
            initialValues,
            validationSchema: Yup.object(validation),
            onSubmit: onSubmit.bind(this),
        };
    }

    getForm({ handleSubmit, isValid }) {
        const hasError = !isValid;
        const { isSubmitting, successMessage, errorMessage } = this.state;
        const submittingClass = isSubmitting ? styles.isSubmitting : '';

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

        const errorClass = hasError ? styles.error : '';

        const onChange = () => this.handleFormChange();

        return (
            <Form
                onSubmit={handleSubmit}
                onChange={onChange}
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
                            <Input {...schema.phone.field} required={phoneRequired} disabled={isSubmitting} />
                        )}
                        {showPhoto && <File {...schema.photo.field} required={photoRequired} disabled={isSubmitting} />}
                    </section>
                </section>
                {showCv && <CvSection isRequired={cvRequired} isSubmitting={isSubmitting} />}
                {showCoverLetter && <CoverLetteSecton isRequired={coverLetterRequired} isSubmitting={isSubmitting} />}
                {!!questions.length && <QuestionSection questions={questions} isSubmitting={isSubmitting} />}
                <section>
                    <section className={styles.submit}>
                        <Checkbox {...schema.privacy.field} disabled={isSubmitting} />
                        <p>
                            <abbr title="required">*&nbsp;</abbr>
                            required fields{' '}
                        </p>
                        <div role="group">
                            <button type="submit" disabled={isSubmitting}>
                                Submit application
                                {isSubmitting && <FontAwesomeIcon icon={faSpinner} spin />}
                            </button>
                            <div className={styles.messages}>
                                {hasError && <FieldErrorSection />}
                                {errorMessage && <ErrorSection message={errorMessage} />}
                                {successMessage && <SuccessSection message={successMessage} />}
                            </div>
                        </div>
                    </section>
                </section>
            </Form>
        );
    }

    handleFormChange() {
        const { errorMessage: currentError, successMessage: currentSuccess } = this.state;
        const hasMessage = currentError || currentSuccess;

        hasMessage &&
            this.setState({
                errorMessage: null,
                successMessage: null,
            });
    }

    render() {
        const formConfig = this.getFormConfig();

        return <Formik {...formConfig}>{this.getForm}</Formik>;
    }
}
