import { Link as GatsbyLink } from 'gatsby';
import { arrayOf, node, oneOfType, shape, string } from 'prop-types';
import React from 'react';

const linkPropTypes = {
    to: string.isRequired,
    target: string,
    children: oneOfType([arrayOf(node), node, string]),
};

export default Link;
export const LinkPropType = shape(linkPropTypes);

Link.propTypes = linkPropTypes;
Link.defaultProps = {
    target: null,
    children: null,
};

function Link({ to, children, ...props }) {
    if (!to) {
        return null;
    }
    const { target } = props;
    const [match] = to.match(/^(?:tel:|mailto:|(?:(?:http(?:s)?:)?\/\/)[^.]+\.\S+)/g) || [];

    const isExternalLink = !!(target || match);

    return isExternalLink ? (
        <a href={to} {...props}>
            {children}
        </a>
    ) : (
        <GatsbyLink to={`/${to}/`.replace(/\/+/g, '/')} {...props}>
            {children}
        </GatsbyLink>
    );
}
