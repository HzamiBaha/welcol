import React from 'react'
import "./services.css";


const data =
    [
        { title: "Coaching de vie", color: "#F00044" },
        { title: "Coaching relationnel", color: "#FF8200" },
        { title: "Coaching de transition", color: "#9F1F64" },
        { title: "Coaching de groupe", color: "#0084C2" },
        { title: "Coaching de couple", color: "#FF8200" },
        { title: "Coaching parents et adolescents", color: "#9F1F64" },
        { title: "Coaching santé et bien-être", color: "#0084C2" },
        { title: "Coaching de performance sportive", color: "#F00044" },

    ]
const Services = () => {
    return (
        <section className="services">
            <div className="service-heading">
                <h2 className="service-heading__title">
                    Des thématiques au services du {" "}<span style={{color : "#FF8200"}}>bien-être</span>
                </h2>
                <p className="service-heading__sub">
                    Welcol est la plateforme dédiée à la plus grande communauté de coachs certifiés.
                </p>
            </div>
            <div className="services-content">
                <div className="service-items">
                    {data.map((item, index) =>
                        <div key={index} className="service-item">
                            <div className="service-item__color" style={{ background: item.color }}></div>
                            <h5 className="service-item__title"> {item.title}</h5>
                        </div>
                    )}
                </div>
                <div className="service-link">
                    <h5 className="service-link__text">
                        Devenir coach partenaire
                    </h5>
                    <i className="service-link__icon"></i>
                </div>
            </div>
        </section>
    )
}

export default Services