import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import showdown from 'showdown';

import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import JobPageTemplate from '../components/page-templates/job-page/job-page.templete';
import preventOrphans from '../lib/prevent-orphans';

const converter = new showdown.Converter();

export default JobPage;

JobPage.propTypes = {
    path: string.isRequired,
    data: shape({
        job: shape({
            title: string.isRequired,
            subtitle: string,
        }),
        filters: shape({
            departments: arrayOf(
                shape({
                    label: string.isRequired,
                    slug: string.isRequired,
                })
            ),
            tags: arrayOf(
                shape({
                    label: string.isRequired,
                    slug: string.isRequired,
                })
            ),
        }).isRequired,
    }).isRequired,
};

function JobPage({ path, data }) {
    const { job, filters } = data;
    const { title, subtitle, introduction, ...templateProps } = job;
    const {
        salary,
        tags,
        description,
        requirements,
        created: datePosted,
        path: identifier,
        employment_type_code: employmentType,
    } = job;

    const page = {
        frontmatter: {
            title,
            subtitle,
            summary: {
                title,
                text: introduction,
            },
            jobDetails: {
                salary,
                tags,
                path,
                filters,
            },
        },
    };

    const layoutProps = {
        ...extractLayoutProps(page),
        jobDetails: {
            filters,
            salary,
            tags,
            path,
        },
    };

    const structuredDataProps = {
        title,
        description: `${description}\n\n${requirements}`,
        datePosted,
        employmentType,
        identifier,
        salary,
    };

    return (
        <Layout {...layoutProps}>
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(structuredData(structuredDataProps))}</script>
            </Helmet>
            <JobPageTemplate {...templateProps} introduction={introduction} path={path} />
        </Layout>
    );
}

function structuredData({ title, description, datePosted, employmentType, salary, identifier }) {
    const fancyText = description ? preventOrphans(description) : '';

    const htmlDescription = converter.makeHtml(fancyText);

    const data = {
        '@context': 'http://schema.org',
        '@type': 'JobPosting',
        title,
        description: htmlDescription,
        identifier: {
            '@type': 'PropertyValue',
            name: 'Headforwards',
            value: identifier,
        },
        datePosted,
        hiringOrganization: {
            '@type': 'Organization',
            name: 'Headforwards',
            sameAs: [
                'https://www.headforwards.com',
                'https://www.facebook.com/headforwards/',
                'https://www.instagram.com/headforwards_uk/',
                'https://www.linkedin.com/company/headforwards/',
                'https://www.youtube.com/channel/UC6EL0AsCvG7duu-PVsSQIXg/',
                'https://twitter.com/headforwards/',
            ],
            logo: 'https://www.headforwards.com/images/headforwards-emblem-text.jpg',
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Pool Innovation Centre, Trevenson Rd',
                addressLocality: 'Cornwall',
                addressRegion: 'ENG',
                postalCode: 'TR15 3PL',
                addressCountry: 'GB',
            },
        },
    };

    const dataEmploymentType = getEmploymentType(employmentType);

    dataEmploymentType && (data.employmentType = dataEmploymentType);

    const [match, min, max] = (salary || '').match(/£\s*(\d{2})\s*-\s*£?\s*(\d{2})\s*[k|K]/) || [];

    match &&
        (data.baseSalary = {
            '@type': 'MonetaryAmount',
            currency: 'GBP',
            value: {
                '@type': 'QuantitativeValue',
                minValue: min * 1000,
                maxValue: max * 1000,
                unitText: 'YEAR',
            },
        });

    return data;
}

export const query = graphql`
    query JobPage($id: String!) {
        filters: dataYaml(title: { eq: "careers" }) {
            tags {
                label
                slug
            }
        }
        job: recruiteeOffer(id: { eq: $id }) {
            ...JobFragment
        }
    }
`;

const employmentTypes = [
    'FULL_TIME',
    'PART_TIME',
    'CONTRACTOR',
    'TEMPORARY',
    'INTERN',
    'VOLUNTEER',
    'PER_DIEM',
    'OTHER',
];

function getEmploymentType(type) {
    return employmentTypes.find(
        employmentType =>
            type.replace(/[^a-zA-Z]/, '').toLowerCase() === employmentType.replace(/[^a-zA-Z]/, '').toLowerCase()
    );
}
