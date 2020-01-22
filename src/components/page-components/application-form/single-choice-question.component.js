import { arrayOf, number, shape, string } from 'prop-types';
import React from 'react';

export default SingleChoiceQuestion;

SingleChoiceQuestion.propTypes = {
    id: number.isRequired,
    body: string.isRequired,
    open_question_options: arrayOf(
        shape({
            id: number.isRequired,
            body: string.isRequired,
        })
    ).isRequired,
};
function SingleChoiceQuestion({ id, body: question, open_question_options: options }) {
    return (
        <div role="group">
            <h2>{question}</h2>
            {options.map(({ id: optionId, body: option }) => {
                const optionIdString = `option-${optionId}`;

                return (
                    <label htmlFor={optionIdString}>
                        <input type="checkbox" value={option} id={optionIdString} />
                        {option}
                    </label>
                );
            })}
        </div>
    );
}
