import { any, arrayOf, bool } from 'prop-types';
import React from 'react';

import styles from '../application-form.module.scss';
import ApplicationQuestions from '../application-questions/application-questions.component';

export default QuestionSection;
QuestionSection.propTypes = {
    questions: arrayOf(any).isRequired,
    isSubmitting: bool,
};
QuestionSection.defaultProps = {
    isSubmitting: false,
};
function QuestionSection({ questions, isSubmitting }) {
    return (
        <section>
            <header>
                <h2>Questions</h2>
                <p>Please fill in additional questions</p>
            </header>
            <section className={styles.questions}>
                {questions && <ApplicationQuestions questions={questions} isSubmitting={isSubmitting} />}
            </section>
        </section>
    );
}
