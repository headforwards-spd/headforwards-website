import { arrayOf, bool } from 'prop-types';
import React from 'react';
import Image, { ImagePropType } from '../../page-layout/image/image.component';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import Postit from '../../page-components/postit/postit.component';
import styles from './homepage.module.scss';

const homepagePropTypes = {
    page: [],
};

export default HomepageTemplate;

HomepageTemplate.propTypes = homepagePropTypes;
HomepageTemplate.defaultProps = {
    page: [],
};

function HomepageTemplate({ page }) {
    const { sections } = page;

    return (
        <>
            {!!sections &&
                sections.map((section, index) => <HomePageSection {...{ ...section, even: index % 2 === 0 }} />)}
        </>
    );
}

HomePageSection.propTypes = {
    even: bool,
    components: arrayOf(PageComponentPropType),
    postit: bool,
    image: ImagePropType,
};
HomePageSection.defaultProps = {
    even: false,
    components: [],
    postit: false,
    image: null,
};

function HomePageSection({ even, components, postit, image }) {
    const wrapperStyles = [
        styles.wrapper,
        even ? styles.isRightImage : '',
        !!image || !!postit ? styles.hasImage : '',
    ].join(' ');

    return (
        <section className={wrapperStyles}>
            {!!image && <Image className={styles.image} ratio="100%" image="/uploads/craig.jpg" />}
            {!!postit && <Postit className={styles.postit} isRightImage={even} />}
            <section className={styles.components}>
                {!!components && components.map(component => <PageComponent {...component} />)}
            </section>
        </section>
    );
}
