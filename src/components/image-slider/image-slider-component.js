import {Link}                                                       from '@reach/router';
import PropTypes                                                    from 'prop-types';
import React, {Component}                                           from 'react';
import Slider                                                       from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Image                                                        from '../image/image-component';
import {flexCol, flexRow, sliderClass, hiddenDesktop, hiddenMobile} from './image-slider-component.module.scss';

export default class ImageSlider extends Component {

    static propTypes = {
        imageSlider: PropTypes.arrayOf(PropTypes.any)
    };

    static defaultProps = {
        imageSlider: []
    };

    render() {
        const {imageSlider} = this.props;
        const settings      = {
            dots:           true,
            infinite:       true,
            speed:          500,
            slidesToShow:   1,
            slidesToScroll: 1
        };

        return (
            <div className={sliderClass}>
                <Slider {...settings}>
                    {imageSlider.map((slide, key) => (
                        <div className={key}>
                            <div className={`${flexRow}`}>
                                <div className={flexCol}>
                                    <h2 className={hiddenMobile}>Our story</h2>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.text}</p>
                                    <Link to={slide.link}>{slide.label}</Link>
                                    <a href="#">Read the case study</a>
                                </div>
                                <div className={flexCol}>
                                    <h2 className={hiddenDesktop}>Our Story</h2>
                                    <Image image={slide.image.publicURL}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    };
};
