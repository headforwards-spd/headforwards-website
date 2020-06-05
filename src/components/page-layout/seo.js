import { graphql, useStaticQuery } from 'gatsby';
import { arrayOf, number, object, shape, string } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const seoPropTypes = {
    location: shape({
        pathname: string,
    }),
    image: shape({
        childImageSharp: shape({
            fixed: shape({
                src: string,
                width: number,
                height: number,
            }),
        }),
    }),
    title: string,
    description: string,
    lang: string,
    meta: arrayOf(object),
};

export default Seo;
export const SeoPropType = shape(seoPropTypes);

Seo.propTypes = seoPropTypes;

Seo.defaultProps = {
    location: null,
    image: null,
    title: '',
    description: '',
    lang: 'en',
    meta: null,
};

function Seo({ location, image, title: pageTitle, description: pageDescription, lang, meta }) {
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
    const { pathname } = location || {};

    const imageContent = src ? `${url}${src}` : null;
    const description = pageDescription || companyDescription;

    return (
        <Helmet htmlAttributes={{ lang }} title={pageTitle} titleTemplate={`%s | ${companyTitle}`}>
            {meta && meta.map((v, k) => <meta name={k} content={v} />)}

            <meta name="description" content={description} />
            {imageContent && <meta name="image" content={imageContent} />}

            <meta itemProp="name" content={pageTitle} />
            <meta itemProp="description" content={description} />
            {imageContent && <meta itemProp="image" content={imageContent} />}

            {pathname && <meta property="og:url" content={`${url}${pathname}/`} />}
            <meta property="og:site_name" content={companyName} />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            {imageContent && <meta property="og:image" content={imageContent} />}

            <meta name="twitter:site" content="@headforwards" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            {imageContent && <meta name="twitter:image" content={imageContent} />}
            {width && <meta property="og:image:width" content={width} />}
            {height && <meta property="og:image:height" content={height} />}

            <meta name="google-site-verification" content={googleSiteVerification} />
            <meta property="fb:pages" content={facebookPagesId} />
        </Helmet>
    );
}
