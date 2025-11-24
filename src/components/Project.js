import React from "react";
import "./Project.css";
import seaImage from "../images/Project1.jpg"; 

function Project() {
  const services =[
    {
      title: "Expert Handling of Complex Shipments",
      description:
        "Trust us with your project shipment, no matter how big, heavy, or complex the items are. Our team has the expertise and equipment to handle it all.",
    },
    {
      title: "Strong Network for Reliable Delivery",
      description:
        "With our network of trusted carriers and partners, we ensure that your shipment is transported via the most efficient mode, be it air, sea, or road.",
    },
    {
      title: "Customs Clearance and Documentation",
      description:
        "We have a thorough understanding of customs regulations and requirements for every country involved. We'll take care of all necessary documentations.",
    },
    {
      title: "Flexible and Budget-Friendly Solutions",
      description:
        "We offer flexible and costeffective solutions that meet the unique requirements of the project and minimize the impact on the budget.",
    },

    {
      title: "Advanced Tracking and Reporting",
      description:
        "Stay informed every step of the way with our tracking and reporting system. You'll have visibility into your shipment and regular updates to keep you informed.",
    },

    {
      title: "Dedicated Customer Support",
      description:
        "We're here to help you every step of the way. Our dedicated customer support team is always available to assist with any questions or concerns you may have.",
    },

  ];

  return (
    <div className="Project-container">
      <img src={seaImage} alt="Project Shipments" className="Project-banner" />

      <h1 className="sea-title">Project Shipments</h1>

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

export default Project;
