import React from 'react'
import PropTypes from 'prop-types'

const DesignPagesPreview = ({ entry, widgetFor }) => (
                                                  <h1>{entry.getIn(['data', 'title'])}</h1>
)

DesignPagesPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default DesignPagesPreview
