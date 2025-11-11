import React from "react";
import "./Custom.css";
import CustomImage from "../images/Custom.jpg"; 

function Custom() {
  const services = [
    {
      title: "Expertise in navigating customs regulations",
      description:
      "Our global network of partners and carriers allows us to handle air freight shipments to and from any location across the globe.",
    },
    
    {
      title: "Swift and efficient clearance process",
      description:
        "Our expertise in customs brokerage ensures that your shipment clears customs smoothly and efficiently.",
    },
    {
      title: "Accurate documentation",
      description:
        "Our pricing is transparent and competitive, with no hidden fees.",
    },
    {
      title: "Strong relationships with agencies",
      description:
        "We optimize routes to save you time and money, considering cost, transit time, and shipment characteristics.",
    },
    {
      title: "Compliance with security regulations",
      description:
        "Our shipments are always in compliance with security regulations and requirements, including IATA standards.",
    },
    {
      title: "Knowledge of compliance requirements<",
      description:
        "Comprehensive cargo tracking and reporting, giving full visibility of your shipment every step of the way.",
    },
    {
      title: "Customer-focused Support",
      description:
        "Our dedicated customer support team is always here to assist you with any questions or concerns throughout the entire shipment process..",
    },
  ];

  return (
    <div className="Custom-container">
      <img src={CustomImage} alt="Custom Freight Forwarding" className="Custom-banner" />

      <h1 className="Custom-title">Custom Freight Forwarding</h1>

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

export default Custom;


