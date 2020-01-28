import React from 'react';

import BooleanQuestion from './boolean-question/boolean-question.component';
import MultiChoiceQuestion from './multi-choice-question/multi-choice-question.component';
import SingleChoiceQuestion from './single-choice-question/single-choice-question.component';
import StringQuestion from './string-question/string-question.component';

export default ApplicationQuestions;

function ApplicationQuestions({ questions, isSubmitting, ...props }) {
    return questions.map(({ kind, ...question }) => {
        let component;
        const { id: key } = question;

        switch (kind) {
            case 'string':
                component = <StringQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
                break;
            case 'single_choice':
                component = <SingleChoiceQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
                break;
            case 'multi_choice':
                component = <MultiChoiceQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
                break;
            case 'boolean':
                component = <BooleanQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
                break;
            default:
                component = null;
                console.error({ kind, question });
        }

        return component;
    });
}
