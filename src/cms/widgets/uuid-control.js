import React, { Component } from 'react';
import * as uuid from 'uuid';
import { string, func } from 'prop-types';

const uuidControlPropTypes = {
    value: string.isRequired,
    onChange: func.isRequired,
    forID: string.isRequired,
    classNameWrapper: string.isRequired,
    setActiveStyle: func.isRequired,
    setInactiveStyle: func.isRequired,
};

export default class UuidControl extends Component {
    static propTypes = uuidControlPropTypes;

    componentDidMount() {
        const { value, onChange } = this.props;

        if (value) {
            return;
        }

        const id = uuid.v1();

        onChange(id);
    }

    render() {
        const { forID, classNameWrapper, setActiveStyle, setInactiveStyle, value } = this.props;

        return (
            <input
                type="text"
                className={classNameWrapper}
                style={{
                    color: '#cdcdcd',
                }}
                value={value}
                id={forID}
                onFocus={setActiveStyle}
                onBlur={setInactiveStyle}
                disabled
            />
        );
    }
}
