import React from 'react'
import "./hero.css";
import Hero1 from "../../assets/hero-1.png";
import Hero2 from "../../assets/hero-2.png";
import Bait from "../../assets/bait.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-cta">
                    <div className="hero-cta__content">
                        <div className="hero-cta__message">
                            <h1 className='hero-cta-title'> Coachez à distance et
                                à la demande Coachez à distance et
                                à la demande
                            </h1>
                            <p className='hero-cta-des'> Votre bureau virtuel pour coacher, développer votre activité et explorer de nouvelles perspectives </p>
                        </div>
                        <div className="hero-cta__buttons">
                            <button className="button__primary">
                                Commencez
                            </button>
                            <button className="button__secondary">
                                savoir-plus
                            </button>
                        </div>
                    </div>

                    <div className="hero-cta__bait">
                        <img src={Bait} alt="about Baha Hzami" className="hero__img" />
                        <h6 className='hero-cta__bait-messsage'>Plus Que 1k Coach</h6>
                    </div>

                </div>
                <div className="hero-images">
                    <img src={Hero1} alt="about Baha Hzami" className="hero__img1" />
                    <img src={Hero2} alt="about Baha Hzami" className="hero__img2" />
                </div>
            </div>

        </div>
    )
}

export default Hero