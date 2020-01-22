import React from 'react';
import Link from '../../page-layout/link/link.component';
import styles from './application-form.module.scss';

export default ApplicationFormTemplate;

function ApplicationFormTemplate(props) {
    const {
        subtitle,
        salary,
        tags,
        options_cover_letter: coverLetterRequired,
        options_cv: cvRequired,
        options_phone: phoneRequired,
        open_questions: questions = [],
    } = props;

    console.log({ questions });

    return (
        <form className={styles.applicationForm}>
            <section>
                <header>
                    <h2>Personal information</h2>
                    <p>Tell us something about yourself</p>
                </header>
                <section>
                    <label className="string required control-label" htmlFor="candidate_name">
                        Full name
                        <input
                            className="string required form-control"
                            required="required"
                            aria-required="true"
                            type="text"
                            name="candidate[name]"
                            id="candidate_name"
                        />
                    </label>
                    <label className="email required control-label" htmlFor="candidate_email">
                        Email address
                        <input
                            className="string email required form-control form-control"
                            required="required"
                            aria-required="true"
                            type="email"
                            name="candidate[email]"
                            id="candidate_email"
                        />
                    </label>
                    <label className="tel required control-label" htmlFor="candidate_phone">
                        Phone number
                        <input
                            className="string tel required form-control form-control"
                            required="required"
                            aria-required="true"
                            type="tel"
                            name="candidate[phone]"
                            id="candidate_phone"
                        />
                    </label>
                </section>
            </section>
            <section>
                <header>
                    <h2>CV / Resume</h2>
                    <p>Upload your CV or resume file</p>
                </header>
                <section>
                    <label className={styles.fileUpload}>
                        <button name="button" type="button">
                            Add file
                        </button>
                        We accept PDF, DOC, DOCX, JPG and PNG files
                    </label>
                </section>
            </section>
            <section>
                <header>
                    <h2>CV / Resume</h2>
                    <p>Upload your CV or resume file</p>
                </header>
                <section>
                    <label className={styles.fileUpload}>[file icon] file-name.pdf [x]</label>
                </section>
            </section>
            <section>
                <header>
                    <h2>Cover letter</h2>
                    <p>Insert your cover letter here</p>
                </header>
                <section>
                    <textarea
                        rows="6"
                        className="text optional form-control"
                        name="candidate[cover_letter]"
                        id="candidate_cover_letter"
                        spellCheck="false"
                    />
                </section>
            </section>
            {!!questions.length && (
                <section>
                    <header>
                        <h2>Questions</h2>
                        <p>Please fill in additional questions</p>
                    </header>
                    <section className={styles.questions}>
                        {questions && <QuestionsComponent questions={questions} />}
                    </section>
                </section>
            )}
            <section>
                <section className={styles.submit}>
                    <div role="group">
                        <label className={styles.fullWidth}>
                            <input
                                required="required"
                                type="checkbox"
                                value="212"
                                name="candidate[terms][]"
                                id="candidate_terms_212"
                            />
                            I agree to the&nbsp;
                            <Link to="/privacy-notice/" target="_blank">
                                Privacy Policy
                            </Link>
                        </label>
                        <button type="button" className={styles.submit}>
                            Submit Application
                        </button>
                    </div>
                </section>
            </section>
        </form>
    );
}

function QuestionsComponent({ questions }) {
    return questions.map(({ kind, ...question }) => {
        switch (kind) {
            case 'string':
                return <StringQuestion {...question} />;
            case 'multi_choice':
                return <MultiChoiceQuestion {...question} />;
            case 'boolean':
                return <BooleanQuestion {...question} />;
        }
    });
}

function StringQuestion({ body }) {
    return (
        <label>
            {body}
            <input type="text" />
        </label>
    );
}

function MultiChoiceQuestion({ body, open_question_options: options }) {
    return (
        <div role="group">
            <h2>{body}</h2>
            {options.map(({ body }) => {
                return (
                    <label>
                        <input type="checkbox" value={body} />
                        {body}
                    </label>
                );
            })}
        </div>
    );
}

function BooleanQuestion({ body }) {
    return (
        <div role="group">
            <h2>{body}</h2>
            <label>
                <input name="contactMe" type="radio" value="Yes" />
                Yes
            </label>
            <label>
                <input name="contactMe" type="radio" value="No" />
                No
            </label>
        </div>
    );
}
