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

function Seo({ location, image, title: pageTitle, description: pageDescripton, lang, meta }) {
    const { companyInfo } = useStaticQuery(graphql`
        query {
            companyInfo: dataYaml(title: { eq: "company-info" }) {
                url
                companyName
                metaTitle
                metaDescription
                googleSiteVerification
                facebookPagesId
            }
        }
    `);

    console.log('Seo', {image});

    const {
        url,
        companyName,
        metaTitle: companyTitle,
        metaDescription: companyDescription,
        googleSiteVerification,
        facebookPagesId,
    } = companyInfo;

    const { childImageSharp } = image || {};
    const { fixed } = childImageSharp || {};
    const { src, width, height } = fixed || {};
    const { pathname } = location;

    const imageContent = src ? `${url}${src}` : null;
    const description = pageDescripton || companyDescription;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={pageTitle}
            titleTemplate={`%s | ${companyTitle}`}
        >
            {meta.map((v, k) => (
                <meta name={k} content={v} />
            ))}

            <meta name="description" content={description} />

            <meta property="og:locale" content="en_GB" />
            <meta property="og:type" content="website" />
            {pathname && <meta property="og:url" content={`${url}${pathname}/`} />}
            <meta property="og:site_name" content={companyName} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@headforwards" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />

            {imageContent && <meta name="image" content={imageContent} />}
            {imageContent && <meta property="og:image" content={imageContent} />}
            {imageContent && <meta name="twitter:image" content={imageContent} />}
            {width && <meta property="og:image:width" content={width} />}
            {height && <meta property="og:image:height" content={height} />}

            <meta name="google-site-verification" content={googleSiteVerification} />
            <meta property="fb:pages" content={facebookPagesId} />
        </Helmet>
    );
}
