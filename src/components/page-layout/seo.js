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

    console.log({ origin, image });

    // facebook 1200 x 630
    // <meta property=“og:image” content=“http://example.com/picture.jpg ” />
    // <meta property="og:image:width" content="1200" />
    // <meta property="og:image:height" content="630" />

    const metaDescription = description || companyInfo.metaDescription;

    const metaTags = {
        description: metaDescription,
        'og:locale': 'en_GB',
        'og:type': 'website',
        'og:url': href,
        'og:site_name': companyInfo.companyName,

        'og:title': title,
        'og:description': description,

        'twitter:card': 'summary_large_image',

        // <meta property="fb:app_id" content="your_app_id" />
        'twitter:site': '@headforwards', // TODO: Extract from URL

        'google-site-verification': companyInfo.googleSiteVerification,
        'fb:pages': companyInfo.facebookPagesId,
    };

    src && (metaTags['og:image'] = `${origin}${src}`);
    width && (metaTags['og:image:width'] = width);
    height && (metaTags['og:image:height'] = height);

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${companyInfo.metaTitle}`}
            meta={Object.keys(metaTags)
                .map(key => ({ name: key, content: metaTags[key] }))
                .concat(meta)}
        />
    );
}
