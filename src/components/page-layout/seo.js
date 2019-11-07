import React from 'react';
import { string, arrayOf, shape, object } from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const seoPropTypes = {
    title: string.isRequired,
    description: string,
    lang: string,
    meta: arrayOf(object),
};

export default Seo;
export const SeoPropType = shape(seoPropTypes);

Seo.propTypes = seoPropTypes;

Seo.defaultProps = {
    description: ``,
    lang: `en`,
    meta: [],
};

function Seo({ description, lang, meta, title }) {
    const { companyInfo } = useStaticQuery(graphql`
        query {
            companyInfo: dataYaml(title: { eq: "company-info" }) {
                metaTitle
                metaDescription
            }
        }
    `);

    const metaDescription = description || companyInfo.metaDescription;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${companyInfo.metaTitle}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    );
}
