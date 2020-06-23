import React from 'react';

import BooleanQuestion from './boolean-question/boolean-question.component';
import ChoiceQuestion from './choice-question/choice-question.component';
import StringQuestion from './string-question/string-question.component';
import TextQuestion from './text-question/text-question.component';

export default ApplicationQuestions;

function ApplicationQuestions({ questions, isSubmitting, ...props }) {
    return questions.map(({ kind, ...question }) => {
        const { id: key } = question;

        switch (kind) {
            case 'string':
                return <StringQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
            case 'text':
                return <TextQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
            case 'single_choice':
                return <ChoiceQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
            case 'multi_choice':
                return <ChoiceQuestion key={key} {...question} disabled={isSubmitting} {...props} isMulti />;
            case 'boolean':
                return <BooleanQuestion key={key} {...question} disabled={isSubmitting} {...props} />;
            default:
                return null;
        }
    });
}
