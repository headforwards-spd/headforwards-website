import React                  from 'react'
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

export default Link;
export const LinkPropType = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
                                      PropTypes.arrayOf(PropTypes.node),
                                      PropTypes.node
                                  ])
};

Link.propTypes = LinkPropType;

function Link({to, children, ...props}) {

    const isExternalLink = to.match(/((?:http(?:s)?:)?\/\/)[^\.]+\.\S+/g);

    return isExternalLink ? <a href={to} {...props}>{children}</a> : <GatsbyLink to={to} {...props}>{children}</GatsbyLink>;
}
