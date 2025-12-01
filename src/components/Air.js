import React from "react";
import "./Air.css";
import AirImage from "../images/Air2.jpg"; 

function Air() {
  const services = [
    {
      title: "Connecting the World",
      description:
      "Our global network of partners and carriers allows us to handle air freight shipments to and from any location across the globe.",
    },
    
    {
      title: "Streamlined Customs Brokerage",
      description:
        "Our expertise in customs brokerage ensures that your shipment clears customs smoothly and efficiently.",
    },
    {
      title: "Transparent Pricing",
      description:
        "Our pricing is transparent and competitive, with no hidden fees.",
    },
    {
      title: "Efficient Route Optimization",
      description:
        "We optimize routes to save you time and money, considering cost, transit time, and shipment characteristics.",
    },
    {
      title: "Secure and Compliance",
      description:
        "Our shipments are always in compliance with security regulations and requirements, including IATA standards.",
    },
    {
      title: "Cargo Tracking",
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
    <div className="Air-container">
      <img src={AirImage} alt="Air Freight Forwarding" className="Air-banner" />

      <h1 className="Air-title">Air Freight Forwarding</h1>

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

export default Air;

