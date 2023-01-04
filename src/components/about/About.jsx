import React from 'react'
import "./about.css";

const About = () => {
    return (
        <section className="about">
            <div className="about-questions">
                <div className="about-questions__setone">
                    <p className="about-questions__sub">
                        pourquoi nous choisir ?
                    </p>
                    <h2 className="about-questions__title">
                        L’application dédiée aux coachs : coachez à distance !
                    </h2>
                    <p className="about-questions__desc">
                        Les outils dont vous avez besoin pour coacher en ligne rassemblés en une seule plateforme.
                    </p>
                </div>
                <div className="about-questions__cta">
                    <p className="question">
                        Télécharger l'application ?
                    </p>
                    <div className="about-buttons">
                        <button className="appstore" />
                        <button className="playstore" />
                    </div>
                </div>
            </div>
            <div className="about-answers">
                <div className="line" />
                <div className="about-answers__section">
                    <h4 className="section__title">
                        01.  Coachez où que vous soyez, quand vous le souhaitez
                    </h4>
                    <div className="section__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="line" />
                <div className="about-answers__section">
                    <h4 className="section__title">
                        02.  Gérez vos consultations et le suivi de vos coachés efficacement
                    </h4>
                    <div className="section__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="line" />
                <div className="about-answers__section">
                    <h4 className="section__title">
                        03.  Soyez plus accessibles à ceux qui ont besoin de vous
                    </h4>
                    <div className="section__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="about-answers__cta">
                    <p className="question">
                        Télécharger l'application ?
                    </p>
                    <div className="about-buttons">
                        <button className="appstore" />
                        <button className="playstore" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About