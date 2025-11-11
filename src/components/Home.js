import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/about');

  };
   const handleLearnMoreClick = () => {
    navigate("/service");
  };
  return (
    <div className="home-container">
      <img src="https://static.vecteezy.com/system/resources/previews/027/100/020/large_2x/a-large-container-cargo-ship-can-be-seen-traveling-across-the-ocean-in-a-front-view-with-enough-free-photo.jpg" alt="background" />
      <div className="home-text">
        <h1 className="home-title">ERA MARYA GLOBAL LOGISTIC PVT.LTD</h1>
        <h2 className="service">logistics Deliveries.</h2>
         <button className="home-btn"  onClick={handleExploreClick}>Explore more</button>
      </div>
      
      <div className="text3">
        <h2>Services we provide.</h2>
      </div>
      <div className="plane">
        <img src="https://image.made-in-china.com/2f0j00rqSVyWLRnbuj/Air-Freight-Shipping-From-China-to-All-Over-of-The-World-Fob-CIF-DDU-DDP-Door-to-Door-Delivery.jpg" alt="plane" />
        <div className="plane-description">
          <h2>Our Air Cargo Services</h2>
          <p>
            We provide fast and secure air freight solutions connecting global
            destinations. Our logistics ensure timely deliveries with utmost care
            and transparency.
          </p>
        </div>
      </div>
      <div className="ships">
        <img src="https://img.freepik.com/premium-photo/smart-shipping-services-aerial-view-cargo-ship-sea_818261-42013.jpg" alt="ship" />
        <div className="ship-description">
          <h2>Our Ships Services</h2>
          <p>
            we offer realible and effective sea freight soluction for global trade. Our logistics ensure cost -effective and timely delivery with comprehensive tracking and support.
          </p>
        </div>
      </div>
      <div className="train">
        <img src="https://tse2.mm.bing.net/th/id/OIP.Esce71-Yz_yNtrDkQnsD_QHaE8?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="train"/>
        <div className="train-description">
          <h2>Our Train Services</h2>
          <p>
            we provide effective and relaible train freight soluction for effective land transport. Our logistics ensure cose-effective and timely delivery with comprehensive tracking and support.
          </p>
        </div>
      </div>
      <div className="quality-section">
        <img src="https://tse4.mm.bing.net/th/id/OIP.MJEE9GziDtXccsj9V4Lb8QHaEp?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="quality-check"/>
        <div className="quality-description">
          <h2> Quality Checking</h2>
          <p>
            we ensure top-notch quality in every shipment through rigorous inspection and monitoring process. Our logistics prioritize customer satisfaction by deliveries that meet highest standards.
          </p>
        </div>
      </div> 
      <div className="warehouse">
        <img src="https://www.amsc-usa.com/wp-content/uploads/2024/01/warehouse-logistics.jpg" alt="warehouse"/>
        <div className="warehouse-description">
          <h2> Warehouses</h2>
          <p>
           we provide secure and stratigicaly located warehouses for eficient storage and discription of goods.Our logistics sensure easy acces and managment of inventory to support smooth supply chain operatcions.
          </p>
        </div>
      </div> 
      <div className="key"><h1>Key feacture</h1></div>
      <div className="keyfeatures-container">
  <div className="keyfeature-card">
    <div className="keyfeature-description">
      <p>
        <strong>1. Order Processing</strong><br />
            Order processing is the initial step in logistics, where customer orders are received, confirmed, and prepared for fulfillment.orders are accurately captured and processed efficiently, which is vital for customer satisfaction and timely delivery. 
      </p>
    </div>
  </div>
</div>
<div className="keyfeatures-container2">
  <div className="keyfeature-card2">
    <div className="keyfeature-description2">
      <p>
          <strong>2. Inventory Management:</strong><br />
           Inventory management revolves around optimizing the levels of stock a business holds. It aims to strike a balance between having enough     inventory to meet demand while avoiding excess that ties up capital and storage space. </p>
    </div>
  </div>
</div>
<div className="keyfeatures-container3">
  <div className="keyfeature-card3">
    <div className="keyfeature-description3">
      <p>
          <strong>3. Warehousing</strong><br />
            Warehousing refers to the storage of goods before they are distributed to customers. This function focuses on the efficient organization of storage space to facilitate quick picking, packing, and dispatching of products.
 </p>
    </div>
  </div>
</div>
<div className="keyfeatures-container4">
  <div className="keyfeature-card4">
    <div className="keyfeature-description4">
      <p>
          <strong>4.Transpotation</strong><br />
            Warehousing refers to the storage of goods before they are distributed to customers. This function focuses on the efficient organization of storage space to facilitate quick picking, packing, and dispatching of products.
 </p>
    </div>
  </div>
</div>
<div className="keyfeatures-container5">
  <div className="keyfeature-card5">
    <div className="keyfeature-description5">
      <p>
          <strong>5.Packaging</strong><br /> 
          Packaging is essential for protecting products during transit and storage. It involves designing packaging that is not only functional but also cost-effective and environmentally friendly.
      </p>
    </div>
  </div>
</div>
<div className="keyfeatures-container6">
  <div className="keyfeature-card6">
    <div className="keyfeature-description6">
      <p>
          <strong>6.Cargo Handeling</strong><br /> 
          Cargo handling encompasses the physical movement of goods within warehouses and during transportation.loading and unloading products, ensuring they are handled safely and efficiently to minimize damage and delays.  
      </p>
    </div>
  </div>
</div>
<div className="why-choose-us">
        <img src="https://tse1.mm.bing.net/th/id/OIP.pkbxsIccnePoU8Pp39fwNgHaGx?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="whychooseus"/>
        <div className="why-description">
          <h2>We are dedicated to customers and <br/>focus on quality</h2>
          <p>
          1.seamless international freight forwarding with<br />our reasonable rates and expentional services.
          </p>
          <p>2. our dedicated customer clearence team simplifies<br /> the process and ensures that your cargo is <br />cleared quickly and efficently</p>
          <p>3. our strong networks of partners and extensive<br /> knowledge of the logistics industry, alloes us <br />to provide the shortest and most cost-effective<br /> delivery. </p>
        </div>
      </div>
      <div className="contact-section">
  <div className="company-info">
    <h2>ERA MARYA PVT. LTD</h2>
    <p>
      Era Marya Global Logistics Pvt. Ltd. is a privately owned Independent freight forwarder established with the concept of providing customers with a comprehensive partnership to enhance every aspect of their Forwarding requirement. The company is dedicated to providing top-notch logistics solutions to businesses of all sizes, driven by a passion for excellence and a commitment to delivering outstanding service to their customers. 
          </p>
  </div>

  <div className="get-in-touch">
    <h2>Get in Touch</h2>
    <p><strong>📍 Location:</strong> vadodara,Gujarat-India</p>
    <p>-----------------------</p>
    <p><strong> Contact:</strong> (+91) 9909928018<br />
info@eramarya.com</p>
<p>-----------------------</p>
<p>(+91) 8866841444<br />
sales@eramarya.com</p>
<p>-----------------------</p>
    <p><strong>📧 Email:info@eramarya.com</strong> </p>
  </div>
</div>
<div className="info-section">
  {/* Left side - Industry Sector */}
  <div className="industry-sector">
    <h2>Industry Sector</h2>
    <ul>
      <li><a href="/">sea freight Forward</a></li>
      <li><a href="/">Air Freight Forward</a></li>
      <li><a href="/">Custome clearence</a></li>
      <li><a href="/">Warehousing</a></li>
    </ul>
  </div>
  <div className="logo-company">
    <img src="https://tse2.mm.bing.net/th/id/OIP.0YhbIQCXaSFU4yKvQe8tQAHaCN?rs=1&pid=ImgDetMain&o=7&rm=3" alt="logo"/>
     <h1 className="logo-desc">ERA MARYA PVT.LTD</h1>
    <button className="learn-more-btn" onClick={handleLearnMoreClick}>Get More</button>
   
  </div>

  
  <div className="page-navigation">
    <h2>Sitemap</h2>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>

</div>
    </div>
  );
};

export default Home;
