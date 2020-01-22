import { number, string } from 'prop-types';
import React from 'react';

export default BooleanQuestion;

BooleanQuestion.propTypes = {
    id: number.isRequired,
    body: string.isRequired,
};
function BooleanQuestion({ id, body: question }) {
    const yesId = `question-${id}-yes`;
    const noId = `question-${id}-no`;

    return (
        <div role="group">
            <h2>{question}</h2>
            <label htmlFor={yesId}>
                <input name="contactMe" type="radio" value="Yes" id={yesId} />
                Yes
            </label>
            <label htmlFor={noId}>
                <input name="contactMe" type="radio" value="No" id={noId} />
                No
            </label>
        </div>
    );
}
