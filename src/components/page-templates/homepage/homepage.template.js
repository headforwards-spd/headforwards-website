import { arrayOf, bool, shape, string } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import Postit from '../../page-components/postit/postit.component';
import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
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
    const { show: showIntroduction, text: introText } = introduction;

    return (
        <>
            {showIntroduction && <IntroductionComponent introduction={introText} />}
            {!!sections && sections.map((section, index) => <HomePageSection {...section} first={index === 0} />)}
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

function HomePageSection({ first, components, isPostit, isRightImage, image, imagePostit, imageSquare }) {
    const hasImage = !!image || !!imagePostit || imageSquare;
    const wrapperStyles = [
        styles.section,
        isRightImage ? styles.isRightImage : '',
        hasImage ? styles.hasImage : '',
    ].join(' ');

    const [{ title }] = components || [{}];
    const firstClass = first ? styles.first : '';

    return (
        <section className={`${wrapperStyles} ${firstClass}`}>
            {!!hasImage && (
                <HomePageImage {...{ isPostit, image, alt: title, imagePostit, imageSquare, isRightImage }} />
            )}
            <section className={styles.components}>
                {!!components && components.map(component => <PageComponent {...component} title={title} />)}
            </section>
        </section>
    );
}

const homePageImagePropTypes = {
    image: ImageSrcPropType.isRequired,
    alt: string,
    imagePostit: ImageSrcPropType,
    imageSquare: ImageSrcPropType,
    isPostit: bool,
    isRightImage: bool,
};

HomePageImage.propTypes = homePageImagePropTypes;
HomePageImage.defaultProps = {
    alt: null,
    imagePostit: null,
    imageSquare: null,
    isPostit: false,
    isRightImage: false,
};
function HomePageImage({ isPostit, image, alt, imagePostit, imageSquare, isRightImage }) {
    return isPostit ? (
        <Postit className={styles.postit} image={imagePostit || image} alt={alt} isRightImage={isRightImage} />
    ) : (
        <Image className={styles.image} image={imageSquare || image} alt={alt} ratio="100%" />
    );
}
