import React from 'react';
import BooleanQuestion from './boolean-question.component';
import MultiChoiceQuestion from './multi-choice-question.component';
import SingleChoiceQuestion from './single-choice-question.component';
import StringQuestion from './string-question.component';

export default ApplicationQuestions;

function ApplicationQuestions({ questions }) {
    return questions.map(({ kind, ...question }) => {
        let component;

        switch (kind) {
            case 'string':
                component = <StringQuestion {...question} />;
                break;
            case 'single_choice':
                component = <SingleChoiceQuestion {...question} />;
                break;
            case 'multi_choice':
                component = <MultiChoiceQuestion {...question} />;
                break;
            case 'boolean':
                component = <BooleanQuestion {...question} />;
                break;
            default:
                component = null;
                console.error({ kind, question });
        }

        return component;
    });
}
