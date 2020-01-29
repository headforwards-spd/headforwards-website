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

function Seo({ location, image, title, description, lang, meta }) {
    const { companyInfo } = useStaticQuery(graphql`
        query {
            companyInfo: dataYaml(title: { eq: "company-info" }) {
                metaTitle
                metaDescription
                companyName
                googleSiteVerification
                facebookPagesId
            }
        }
    `);

    const {childImageSharp} = image || {};
    const {fixed} = childImageSharp || {};
    const {src, width, height} = fixed || {};

    const { origin, href } = location;


    const metaDescription = description || companyInfo.metaDescription;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${companyInfo.metaTitle}`}
            meta={meta}
        >
            <meta name="description" content={metaDescription} />

            <meta property="og:locale" content="en_GB" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={href} />
            <meta property="og:site_name" content={companyInfo.companyName} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@headforwards" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />

            {src && <>
                <meta name="image" content={`${origin}${src}`} />
                <meta property="og:image" content={`${origin}${src}`} />
                <meta name="twitter:image" content={`${origin}${src}`} />
                {width && <meta property="og:image:width" content={width} />}
                {height && <meta property="og:image:height" content={height} />}
            </>}

            {/*<meta property="fb:app_id" content="your_app_id" />*/}
            <meta name="google-site-verification" content={companyInfo.googleSiteVerification} />
            <meta name="fb:pages" content={companyInfo.facebookPagesId} />
        </Helmet>
    );
}
