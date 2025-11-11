import React from "react"
import { Link } from "react-router-dom";
import "./Service.css";

function ServiceTable() {
  const services = [
    {
      title: "Sea Freight Forwarding",
      description:
        "Offering seamless and efficient sea freight forwarding solutions for all your import and export needs.",
      link: "/sea"
    },
    {
      title: "Air Freight Forwarding",
      description:
        "Speed, reliability, and affordability – our air freight forwarding service guarantees a seamless and cost-effective experience for all your air cargo needs.",
      link: "/air"
    },
    {
      title: "Custom Transport",
      description:
        "Effortlessly Navigate the Customs Clearance Process with Era Marya Global Logistics Pvt. Ltd.",
      link: "/custom"
    },
    {
      title: "Warehousing",
      description:
        "Secure storage facilities for all types of goods and shipmentsMaximize your storage space with our state-of-the-art warehousing and storage facilities, offering secure and efficient solutions for all your storage requirements with security.",
      link: "/warehousing"
    }
  ];

  return (
    <div className="service-section">
      <h1 className="service-heading">Our Services</h1>

      <div className="service-card-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link} className="btn">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceTable;
