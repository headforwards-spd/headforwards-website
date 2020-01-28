import { Link as GatsbyLink } from 'gatsby';
import { arrayOf, node, oneOfType, shape, string } from 'prop-types';
import React from 'react';

const linkPropTypes = {
    to: string.isRequired,
    children: oneOfType([arrayOf(node), node, string]),
};

export default Link;
export const LinkPropType = shape(linkPropTypes);

Link.propTypes = linkPropTypes;
Link.defaultProps = { children: null };
function Link({ to, children, ...props }) {
    if (!to) {
        return null;
    }

    const isExternalLink = to.match(/^(?:tel:|(?:(?:http(?:s)?:)?\/\/|mailto:)[^.]+\.\S+)/g);

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
