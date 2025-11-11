import React from "react";
import "./Warehousing.css";
import WarehousingImage from "../images/Warehous.jpg"; 

function Warehousing() {
  const services = [
    {
      
      description:
      "th value-aOur comprehensive warehousing services include receiving, picking, packing, and shipping, and we go above and beyond widded services like labelling, kitting, and de-kitting. Our spacious facilities and experienced team ensure your goods are stored safely and securely.",
    },
    
    {
      
      description:
        "Maximize the efficiency and security of your warehousing operations with Era Marya Global Logistics Pvt. Ltd.. Our expert team offers Physical Verification of your goods to ensure accuracy and accountability, Auditing of the warehousing process to identify areas for improvement and Warehouse SOP Development to streamline your operations and enhance productivity. Trust us to provide the support you need to keep your business running smoothly.",
    },
  
  ];

  return (
    <div className="Warehousing-container">
      <img src={WarehousingImage} alt="Warehousing" className="Warehousing-banner" />

      <h1 className="Warehouseing-title">Warehous</h1>

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

export default Warehousing;





