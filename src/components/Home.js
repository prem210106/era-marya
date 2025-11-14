import React from 'react'
import './Home.css';
import { useNavigate } from "react-router-dom";
import banner from "./assets/banner.jpg"
import Whychoose from './WhyChooseUs';

function Home() {
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate("/service");
  };
  const goToairservice = () => {
    navigate("/Air");

  };
  const goToshipservice = () => {
    navigate("/Sea");

  };
  const goTowarservice = () => {
    navigate("/Warehousing");

  };
  const goTocustservice = () => {
    navigate("/Custom");

  };
  return (
    <div className="home-container">
      <img src={banner} alt="home-background" className='home-image'/>
      <div className="link"><h3><a href='https://techstrota.com/'>www.techstrota.com</a></h3></div>
      <h2>Services we provide.</h2>
      <div className="key-features">
        <div className="card plane">
          <img
            src="https://thumbs.dreamstime.com/b/sunset-silhouette-aircraft-ready-takeoff-vibrant-airport-generative-ai-amidst-stunning-sits-poised-runway-353330361.jpg"
            alt="Air Cargo" onClick={goToairservice} />
          <div className="plane-description">
            <h2>Air Cargo Services</h2>
            <p>Fast and secure air freight connecting global destinations.</p>
          </div>
        </div>

        <div className="card ships">
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/100/020/large_2x/a-large-container-cargo-ship-can-be-seen-traveling-across-the-ocean-in-a-front-view-with-enough-free-photo.jpg" alt="background" onClick={goToshipservice} />
          <div className="ship-description">
            <h2>Sea Cargo Services</h2>
            <p>Reliable and efficient shipping services with global coverage.</p>
          </div>
        </div>

        {/*<div className="card train">
              <img
                src="https://static.vecteezy.com/system/resources/previews/030/459/806/non_2x/cargo-train-massive-industrial-and-essential-for-global-trade-free-photo.jpg"
                alt="Train Cargo"
              />
              <div className="train-description">
                <h2>Rail Freight</h2>
                <p>Eco-friendly and cost-effective rail transport solutions.</p>
              </div>
            </div>*/}

        <div className="card warehouse">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.k-zOR0QVjanCgzvN-CpaeAHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" onClick={goTowarservice}
            alt="Warehouse" />
          <div className="warehouse-description">
            <h2>Warehouse & Storage</h2>
            <p>Safe, optimized, and scalable warehousing for all logistics needs.</p>
          </div>
        </div>
        <div className="card custome">
          <img
            src="https://amaccustoms.com.au/wp-content/uploads/2020/04/Transport-Logistics-01-1400x1037.jpg" onClick={goTocustservice}
            alt="custome" />
          <div className="custome-description">
            <h2>Custome freight</h2>
            <p> custome transport make your transport more efficent and Reliable</p>
          </div>
        </div>
      </div>
     
      <div className="keyfeatures-section">
        <h1 className="key-title">Our Key Features</h1>

        <div className="keyfeatures-grid">

          <div className="key-card">
            <div className="card-inner">
              <img src="https://www.amsc-usa.com/wp-content/uploads/2023/12/the-order-processing-flow.jpg" alt="Order Processing" />
              <div className="card-content">
                <h3>Order Processing</h3>
                <p>We ensure accurate and efficient order management from placement to dispatch.</p>
              </div>
            </div>
          </div>

          <div className="key-card">
            <div className="card-inner">
              <img src="https://planergy.com/wp-content/uploads/2020/02/inventory-managment-procress-diagram-2.jpg" alt="Inventory Management" />
              <div className="card-content">
                <h3>Inventory Management</h3>
                <p>Optimize your stock levels for maximum efficiency and minimal waste.</p>
              </div>
            </div>
          </div>

          <div className="key-card">
            <div className="card-inner">
              <img src="https://www.amsc-usa.com/wp-content/uploads/2024/01/warehouse-logistics.jpg" alt="Warehousing" />
              <div className="card-content">
                <h3>Warehousing</h3>
                <p>Safe and systematic storage solutions for all types of goods.</p>
              </div>
            </div>
          </div>

          <div className="key-card">
            <div className="card-inner">
              <img src="https://th.bing.com/th/id/R.28a17a7862c5cd48264dd61b86f5fb9a?rik=SlgWdv5IOtqxSA&riu=http%3a%2f%2fsiddheshwarlogistic.com%2fwp-content%2fuploads%2f2023%2f09%2fThe-Different-Modes-of-Transportation-Header-e1645547707423.jpg&ehk=TECiz%2fc9sy40%2fq8atqaVv78wR4TEQ4qVgSM49OSaQcQ%3d&risl=&pid=ImgRaw&r=0" alt="Transportation" />
              <div className="card-content">
                <h3>Transportation</h3>
                <p>Reliable and timely delivery with a strong network of logistics partners.</p>
              </div>
            </div>
          </div>

          <div className="key-card">
            <div className="card-inner">
              <img src="https://th.bing.com/th/id/OIP.lS86BfBtDlnI1SBQ8z1RkAHaE5?o=7&cb=ucfimgc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Packaging" />
              <div className="card-content">
                <h3>Packaging</h3>
                <p>Secure, sustainable, and cost-effective packaging for all shipments.</p>
              </div>
            </div>
          </div>

          <div className="key-card">
            <div className="card-inner">
              <img src="https://tse4.mm.bing.net/th/id/OIP.n1m_xlA12u0BtLpSZXM2hQHaE8?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Cargo Handling" />
              <div className="card-content">
                <h3>Cargo Handling</h3>
                <p>Safe and efficient loading and unloading to minimize damage and delay.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div><h2 className="section-title">Why Choose Us</h2></div>
       < Whychoose />
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
        <div className="logo-company">
          <img src="https://tse2.mm.bing.net/th/id/OIP.0YhbIQCXaSFU4yKvQe8tQAHaCN?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="logo" />
          <h4 className="logo-desc"><p>Era Marya Global Logistics Pvt. Ltd. is ambitious freight forwarding and Logistics Company in India, eager to make a positive impact in the industry with innovative logistics solutions.</p></h4>
          

        </div>
        {/* Left side - Industry Sector */}
        <div className="industry-sector">
          <h3>Industry Sector</h3>
          <ul>
            <li><a href="/Sea">sea freight Forward</a></li>
            <li><a href="/Air">Air Freight Forward</a></li>
            <li><a href="/Custome">Custome clearence</a></li>
            <li><a href="/Warehousing">Warehousing</a></li>
          </ul>
        </div>



        <div className="page-navigation">
          <h3>Sitemap</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      </div>
  );
}

export default Home;
