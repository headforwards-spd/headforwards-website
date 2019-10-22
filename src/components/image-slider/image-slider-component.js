import React, {Component} from 'react';
import {Glide}            from 'react-glide';
import 'react-glide/lib/reactGlide.css';
import {flexRow, flexCol, slider} from './image-slider-component.module.scss';

export default class ImageSlider extends Component {

    render() {
        return (
            <div className={slider}>
                <Glide autoPlay={false} autoPlaySpeed={1000} dots={true} infinite={true}>
                    <div>
                        <div className={`${flexRow}`}>
                            <div className={flexCol}>
                                <h2>Our story</h2>
                                <h1>The new option in software outsourcing</h1>
                                <p>We are a British software outsourcing company based in the stunning location of
                                    Cornwall. Being in Cornwall is important to us. It enables us to get the perfect
                                    work life balance that we strive for.</p>
                                <a href="#">Read the case study</a>
                            </div>
                            <div className={flexCol}>
                                <img src="/static/2174f6f5a799dc5bedf93eb92ed86522/86420/girl.png" alt="image1"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`${flexRow}`}>
                            <div className={flexCol}>
                                <h1>The new option in software outsourcing</h1>
                                <p>We are a British software outsourcing company based in the stunning location of
                                    Cornwall. Being in Cornwall is important to us. It enables us to get the perfect
                                    work life balance that we strive for.</p>
                                <a href="#">Read the case study</a>
                            </div>
                            <div className={flexCol}>
                                <img src="https://picsum.photos/id/313/400/400" alt="image1"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`${flexRow}`}>
                            <div className={flexCol}>
                                <h1>The new option in software outsourcing</h1>
                                <p>We are a British software outsourcing company based in the stunning location of
                                    Cornwall. Being in Cornwall is important to us. It enables us to get the perfect
                                    work life balance that we strive for.</p>
                                <a href="#">Read the case study</a>
                            </div>
                            <div className={flexCol}>
                                <img src="https://picsum.photos/id/313/400/400" alt="image1"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`${flexRow}`}>
                            <div className={flexCol}>
                                <h1>The new option in software outsourcing</h1>
                                <p>We are a British software outsourcing company based in the stunning location of
                                    Cornwall. Being in Cornwall is important to us. It enables us to get the perfect
                                    work life balance that we strive for.</p>
                                <a href="#">Read the case study</a>
                            </div>
                            <div className={flexCol}>
                                <img src="https://picsum.photos/id/313/400/400" alt="image1"/>
                            </div>
                        </div>
                    </div>

                </Glide>
            </div>
        );
    };
};
