import React from "react";
import "./Services.css";
import ServiceList from "./ServicesList";

const Services = () => {
    return (
        <section id="services">
            <div className="serviceHeading">
                <span className="serviceTitle">What I do</span>
                <span className="serviceDesc">Description aaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaa aaaaaaa</span>
            </div>
            <div className="serviceBars">
                {ServiceList.map((service, index) => (
                    <div key={index} className="serviceBar">
                        <img src={service.img} alt={service.serviceName} className="serviceBarImg" />
                        <div className="serviceBarText">
                            <h3>{service.serviceName}</h3>
                            <p>{service.serviceDesc}</p>
                        </div>
                    </div>
                ))}
            </div> 
        </section>
    )
}

export default Services;