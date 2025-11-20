import React from "react";
import "./Sea.css";
import seaImage from "../images/sea.jpg"; 

function Sea() {
  const services = [
    {
      title: "CFS Loads",
      description:
        "We offer Container Freight Station (CFS) loads to ensure efficient and secure loading and unloading of containers at designated facilities.",
    },
    {
      title: "Consolidation Services",
      description:
        "Our consolidation services provide Full Container Load (FCL) and Less than Container Load (LCL) shipping options to ensure maximum efficiency and cost-effectiveness, no matter where your goods need to be shipped.",
    },
    {
      title: "Dry Bulk Shipments",
      description:
        "We provide service to handle dry bulk shipments. With our expertise, you can rest assured that your shipment will be delivered on time and in good condition.",
    },
    {
      title: "ODC and Project Shipments",
      description:
        "We specialize in handling over-dimensional and project shipments, ensuring that your goods are transported with the utmost care and security.",
    },

    {
      title: "Refrigerated services for perishable products",
      description:
        "We offer refrigerated transportation services for perishable products with temperaturecontrolled containers to ensure that your cargo is kept fresh throughout the entire transportation process.",
    },

    {
      title: "Freight Insurance",
      description:
        "To ensure the protection of your shipment, we provide freight insurance to give you peace of mind and protect your cargo from any potential damage or loss..",
    },

    {
      title: "Cargo tracking system",
      description:
        "Our cargo tracking system helps to monitor the status of your shipment and receive regular updates on its progress. This helps to minimize any potential delays or issues and ensures that your cargo is delivered on time and in the right condition..",
    },
  ];

  return (
    <div className="sea-container">
      <img src={seaImage} alt="Sea Freight Forwarding" className="sea-banner" />

      <h1 className="sea-title">Sea Freight Forwarding</h1>

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

export default Sea;
