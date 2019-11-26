import React             from 'react'
import Layout            from '../components/page-layout/layout'
import IndexPageTemplate
                         from '../components/page-templates/index-page/index-page.template'

export default function IndexPage({pageContext}) {

    const {children:pages, ...header} = pageContext;

    return (
        <Layout {...header}>
            <IndexPageTemplate {...{pages}} />
        </Layout>
    );
}
