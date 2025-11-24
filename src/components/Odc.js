import React from "react";
import "./Odc.css";
import seaImage from "../images/Odc2.jpg"; 

function Odc() {
  const services =[
    {
      title: "Route Optimization",
      description:
        "We offer Container Freight Station (CFS) loads to ensure efficient and secure loading and unloading of containers at designated facilities.",
    },
    {
      title: "Carrier Expertise",
      description:
        "Our team carefully selects carriers with a proven track record of reliability, safety, and insurance coverage for a seamless logistics support experience.",
    },
    {
      title: "Safe Loading",
      description:
        "The safety and security of your goods during transit is our top priority, which is why we ensure proper loading of the cargo onto the transportation vehicle.",
    },
    {
      title: "Streamlined Documentation",
      description:
        "We handle all the necessary documentation for customs clearance, including bills of lading and any other required documents, to ensure compliance with local regulations.",
    },

    {
      title: "Risk Mitigation",
      description:
        "Our Insurance coverage and risk management solutions, giving you peace of mind during transit.",
    },

    {
      title: "Cargo Tracking",
      description:
        "Our tracking and monitoring system, which provides updates on the location and status of your cargo, as well as notifications in case of any unexpected events or delays.",
    },

    {
      title: "Oversized Cargo Support",
      description:
        "For oversized or heavy cargo, we provide specialized support, including custom crating and packaging, specialized equipment, and experienced handling personnel, to ensure safe and secure movement of your goods.",
    },
  ];

  return (
    <div className="Odc-container">
      <img src={seaImage} alt="ODC Logistics Support" className="Odc-banner" />

      <h1 className="sea-title">ODC Logistics Support</h1>

      <table className="service-table">
        <thead>
          <tr>
            <th>Service Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td className="service-title">{service.title}</td>
              <td className="service-description">{service.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Odc;
