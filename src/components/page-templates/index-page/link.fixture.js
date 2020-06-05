import faker from 'faker/locale/en_GB';
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import generateImage from '../../../lib/generate-image';
import FixtureLayout from '../../page-layout/FixtureLayout';
import BlogLink from './blog-link.component';
import styles from './index-page.module.scss';
import PageLink from './page-link.component';

export default {
    'Page Link': PageLinkFixture,
    'Blog Link': BlogLinkFixture,
};

const defaultPageValue = {
    link: faker.random.uuid(),
    linkText: faker.lorem.words(),
    page: {
        frontmatter: {
            summary: {
                image: generateImage(true),
                text: faker.lorem.paragraph(),
            },
        },
    },
    isPostit: false,
};

const defaultBlogValue = {
    fields: { link: faker.random.uuid() },
    frontmatter: {
        summary: {
            image: generateImage(true),
            text: faker.lorem.paragraph(),
        },
        author: {
            frontmatter: {
                name: faker.name.findName(),
            },
        },
    },
};

function PageLinkFixture() {
    const [props] = useValue('Props', { defaultValue: defaultPageValue });

    return (
        <FixtureLayout>
            <section className={`${styles.pages}`}>
                <PageLink {...props} />
            </section>
        </FixtureLayout>
    );
}

function BlogLinkFixture() {
    const [props] = useValue('Props', { defaultValue: defaultBlogValue });

    return (
        <FixtureLayout>
            <BlogLink {...props} />
        </FixtureLayout>
    );
}
