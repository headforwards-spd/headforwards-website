import React, { Component } from 'react';
import * as uuid from 'uuid';
import { string, func } from 'prop-types';

const uuidControlPropTypes = {
    value: string.isRequired,
    onChange: func.isRequired,
    classNameWrapper: string.isRequired,
};

export default class UuidControl extends Component {
    static propTypes = uuidControlPropTypes;

    isValid() {
        const { value, onChange } = this.props;

        !value && onChange(uuid.v1());

        return true;
    }

    render() {
        const { classNameWrapper, value } = this.props;

        return <p className={classNameWrapper}>{value}</p>;
    }
}
