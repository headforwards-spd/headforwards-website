import React from 'react';

import PageComponent from '../components/page-components/page-component';
import Layout from '../components/page-layout/layout';

export default () => {
    const props = {
        title: 'Oops, Page Not Found',
        callToAction: 'Perhaps we can still answer your question',
    };

    const component = {
        type: 'image-copy-component',
        content: [
            {
                type: 'markdown-component',
                text: `Sorry, that page doesn't exist...`,
            },
        ],
    };

    return (
        <Layout {...props}>
            <section>
                <PageComponent {...component} />
            </section>
        </Layout>
    );
};
