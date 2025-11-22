import React from 'react'
import './Home.css';
import { useNavigate } from "react-router-dom";
import banner from "./assets/banner.jpg"
import Whychoose from './WhyChooseUs';
function Home() {
  const navigate = useNavigate();
  
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
      {/*<button className="exploremore-button">Explore more</button>*/}
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
      <div class="box-contact">
        <div class="content-wrapper">
        
            <div class="company-info">
                <h1 class="company-title">
                    ERA MARYA <span class="highlight">PVT. LTD</span>
                </h1>
                <p class="company-description">
                    Era Marya Global Logistics Pvt. Ltd. is a privately owned Independent
                    freight forwarder established with the concept of providing customers
                    with a comprehensive partnership to enhance every aspect of their
                    Forwarding requirement. The company is dedicated to providing top-notch
                    logistics solutions to businesses of all sizes, driven by a passion for
                    excellence and a commitment to delivering outstanding service to their
                    customers.
                </p>
            </div>

      
            <div class="contact-card">
                <h2 class="card-title">Get in Touch</h2>
                
                <div class="contact-list">
            
                    <div class="contact-item">
                        <div class="icon-wrapper">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </div>
                        <div class="contact-details">
                            <p class="contact-label">Location</p>
                            <p class="contact-value">vadodara, Gujarat-India</p>
                        </div>
                    </div>

                    <div class="divider"></div>

                  
                    <div class="contact-item">
                        <div class="icon-wrapper">
                            <img src="https://static.vecteezy.com/system/resources/previews/000/424/425/original/vector-web-icon.jpg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" alt="abcds"/>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                          
                        </div>
                       <div class="contact-details">
                            <p class="contact-label">Website</p>
                            <a href="https://eramarya.com/" target="_blank" rel="noopener noreferrer" class="contact-link">www.eramarya.com</a>
                        </div>
                    </div>

                    <div class="divider"></div>

                    
                    <div class="contact-item">
                        <div class="icon-wrapper">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <div class="contact-details">
                            <p class="contact-label">Sales</p>
                            <a href="tel:+918866841444" class="contact-link">(+91) 8866841444</a>
                            <p class="contact-email"><a href="https://eramarya.com/">sales@eramarya.com</a></p>
                        </div>
                    </div>

                    <div class="divider"></div>

                  
                    <div class="contact-item">
                        <div class="icon-wrapper">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                        </div>
                        <div class="contact-details">
                            <p class="contact-label">Email</p>
                            <a href="https://eramarya.com/" class="contact-email-link">info@eramarya.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
      </div>
  );
}

export default Home;
