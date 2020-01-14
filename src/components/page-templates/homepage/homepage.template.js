import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';
import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import Postit from '../../page-components/postit/postit.component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import styles from './homepage.module.scss';

const homePageSectionPropTypes = {
    isRightImage: bool,
    components: arrayOf(PageComponentPropType),
    isPostit: bool,
    image: ImageSrcPropType,
    imagePostit: ImageSrcPropType,
    imageSquare: ImageSrcPropType,
};
const homepagePropTypes = {
    introduction: string,
    sections: arrayOf(shape(homePageSectionPropTypes)),
};

export default HomepageTemplate;

HomepageTemplate.propTypes = homepagePropTypes;
HomepageTemplate.defaultProps = {
    introduction: null,
    sections: null,
};

function HomepageTemplate({ introduction, sections }) {
    return (
        <>
            <IntroductionComponent introduction={introduction} />
            {!!sections && sections.map(section => <HomePageSection {...{ ...section }} />)}
        </>
    );
}

HomePageSection.propTypes = homePageSectionPropTypes;
HomePageSection.defaultProps = {
    isRightImage: false,
    components: [],
    isPostit: false,
    image: null,
    imagePostit: null,
    imageSquare: null,
};

function HomePageSection({ components, isPostit, isRightImage, image, imagePostit, imageSquare }) {
    const hasImage = !!image || !!imagePostit || imageSquare;
    const wrapperStyles = [
        styles.section,
        isRightImage ? styles.isRightImage : '',
        hasImage ? styles.hasImage : '',
    ].join(' ');

    return (
        <section className={wrapperStyles}>
            {!!hasImage && <HomePageImage {...{ isPostit, image, imagePostit, imageSquare, isRightImage }} />}
            <section className={styles.components}>
                {!!components && components.map(component => <PageComponent {...component} />)}
            </section>
        </section>
    );
}

const homePageImagePropTypes = {
    image: ImageSrcPropType.isRequired,
    imagePostit: ImageSrcPropType,
    imageSquare: ImageSrcPropType,
    isPostit: bool,
    isRightImage: bool,
};

HomePageImage.propTypes = homePageImagePropTypes;
HomePageImage.defaultProps = {
    imagePostit: null,
    imageSquare: null,
    isPostit: false,
    isRightImage: false,
};
function HomePageImage({ isPostit, image, imagePostit, imageSquare, isRightImage }) {
    return isPostit ? (
        <Postit className={styles.postit} image={imagePostit || image} isRightImage={isRightImage} />
    ) : (
        <Image className={styles.image} image={imageSquare || image} ratio="100%" />
    );
}
