import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/page-layout/layout';
import TermsConditionsTemplate from '../components/page-templates/tandcs/tandcs.template';

export default TermsConditions;

function TermsConditions() {
    const props = {
        title: 'Terms and conditions.',
    };

    const { tcData } = useStaticQuery(graphql`
        query {
            tcData: dataYaml(title: { eq: "terms-and-conditions" }) {
                introduction
                sections {
                        text
                }
            }
        }
    `);

    return (
        <Layout {...props}>
            <TermsConditionsTemplate {...{ tcData }} />
        </Layout>
    );
}
