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
    isPostit: bool,
    image: ImagePropType,
    imageSquare: ImagePropType,
};
HomePageSection.defaultProps = {
    even: false,
    components: [],
    isPostit: false,
    image: null,
    imageSquare: null,
};

function HomePageSection({ even, components, isPostit, image, imageSquare }) {
    const wrapperStyles = [
        styles.wrapper,
        even ? styles.isRightImage : '',
        !!image || !!isPostit ? styles.hasImage : '',
    ].join(' ');

    return (
        <section className={wrapperStyles}>
            {!!image && <HomePageImage {...{ isPostit, image, imageSquare, even }} />}
            <section className={styles.components}>
                {!!components && components.map(component => <PageComponent {...component} />)}
            </section>
        </section>
    );
}

HomePageImage.propTypes = {
    image: ImagePropType.isRequired,
    imageSquare: ImagePropType.isRequired,
    isPostit: bool,
    even: bool,
};
HomePageImage.defaultProps = {
    isPostit: false,
    even: false,
};
function HomePageImage({ isPostit, image, imageSquare, even }) {
    return isPostit ? (
        <Postit className={styles.postit} image={imageSquare || image} isRightImage={even} />
    ) : (
        <Image className={styles.image} ratio="100%" image={image} />
    );
}
