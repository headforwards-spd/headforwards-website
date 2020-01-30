import React from 'react';

import Layout from '../components/page-layout/layout';

export default () => {
    const props = {
        title: '410: Gone',
    };

    return (
        <Layout {...props}>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    );
};
