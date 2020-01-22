import { number, string } from 'prop-types';
import React from 'react';

export default StringQuestion;

StringQuestion.propTypes = {
    id: number.isRequired,
    body: string.isRequired,
};
function StringQuestion({ id, body: question }) {
    const questionId = `question-${id}`;

    return (
        <label htmlFor={questionId}>
            {question}
            <input type="text" id={questionId} />
        </label>
    );
}
