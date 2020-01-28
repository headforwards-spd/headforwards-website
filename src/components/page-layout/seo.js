import { graphql, useStaticQuery } from 'gatsby';
import { arrayOf, object, shape, string } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const seoPropTypes = {
    title: string,
    description: string,
    lang: string,
    meta: arrayOf(object),
};

export default Seo;
export const SeoPropType = shape(seoPropTypes);

Seo.propTypes = seoPropTypes;

Seo.defaultProps = {
    title: '',
    description: ``,
    lang: `en`,
    meta: [],
};

function Seo({ title, description, lang, meta }) {
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
