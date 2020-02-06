import React from 'react';

import BooleanQuestion from './boolean-question/boolean-question.component';
import MultiChoiceQuestion from './multi-choice-question/multi-choice-question.component';
import SingleChoiceQuestion from './single-choice-question/single-choice-question.component';
import StringQuestion from './string-question/string-question.component';

export default ApplicationQuestions;

function ApplicationQuestions({ questions, isSubmitting, ...props }) {
    return questions.map(({ kind, ...question }) => {
        const { id: key } = question;

        switch (kind) {
            case 'string':
                return <StringQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
            case 'single_choice':
                return <SingleChoiceQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
            case 'multi_choice':
                return <MultiChoiceQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
            case 'boolean':
                return <BooleanQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
            default:
                return <></>;
        }
    });
}
