import { arrayOf, bool, number, shape, string } from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';

import styles from './carousel.module.scss';

export const SlideProps = {
    title: string.isRequired,
};
export const CarouselProps = {
    slides: arrayOf(shape({ id: string.isRequired, ...SlideProps })).isRequired,
};
export default Carousel;

Carousel.propTypes = CarouselProps;
Carousel.defaultProps = {};
function Carousel({ slides }) {
    const [active, setActive] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const offset = useMemo(() => Math.round(slides.length / 2) - 1, [slides]);

    const isEvenClass = slides.length % 2 ? '' : styles.isEven;

    useEffect(() => {
        const next = (active + 1) % slides.length;
        const id = setTimeout(() => {
            setActive(next);
        }, 5000);
        return () => clearTimeout(id);
    }, [active]);

    useEffect(() => {
        const id = setTimeout(() => setIsSliding(false), 1200);
        setIsSliding(true);
        return () => clearTimeout(id);
    }, [active]);

    return (
        <section className={`${styles.carousel} ${isEvenClass}`}>
            {slides.map(({ id, ...slide }, index) => (
                <Slide
                    key={id}
                    {...slide}
                    index={index}
                    active={active}
                    offset={offset}
                    length={slides.length}
                    isSliding={isSliding}
                />
            ))}
        </section>
    );
}

Slide.propTypes = {
    index: number.isRequired,
    active: number.isRequired,
    offset: number.isRequired,
    length: number.isRequired,
    isSliding: bool.isRequired,
    ...SlideProps,
};
function Slide({ title, index, active, offset, length, isSliding }) {
    const slidingOffset = isSliding ? 1 : 0;
    const order = (length + index + offset - active + slidingOffset) % length;
    const isSlidingClass = isSliding ? styles.isSliding : '';

    return (
        <section className={`${styles.slide} ${isSlidingClass}`} style={{ order }}>
            <h2>
                {title} ({active})
            </h2>
        </section>
    );
}
