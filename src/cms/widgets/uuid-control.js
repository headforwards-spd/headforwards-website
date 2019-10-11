import React, {Component} from 'react'
import * as uuid          from 'uuid'

export default class UuidControl extends Component {

    componentDidMount() {
        const { value, onChange, } = this.props

        if (value) { return }

        const id = uuid.v1();

        onChange(id)
    }

    render() {
        const {
                  forID,
                  classNameWrapper,
                  setActiveStyle,
                  setInactiveStyle,
                  value,
              } = this.props

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
        )
    }
}
