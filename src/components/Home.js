import React from 'react'
import './Home.css';
import { useNavigate } from "react-router-dom";
import banner from "./assets/banner1.jpg"
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
   <div className="position-relative w-100 home-container">

  {/* Banner Image */}
  <img 
  src={banner} 
  alt="banner" 
  className="img-fluid w-100 h-100"
  style={{
    height: "100vh",
    objectFit: "cover",
    filter: "brightness(50%)",
  }}
/>
 <div className="home-title ">
    <h1 className="company-anim">ERA MARYA GLOBAL LOGISTICS PVT.LTD</h1>
  </div>

  {/* Top-left Tagline */}
  {/*<div className="home-tagline">Logistics Services for a better future</div>*/}

  {/* Bottom-left Paragraph */}
  <div className="dec">
    <p>
      Era Marya Global Logistics Pvt. Ltd. is an ambitious freight forwarding and
      logistics company in India, eager to make a positive impact in the industry
      with innovative logistics solutions.
    </p>
  </div>

  <style>
    {`
      /* Company Name */
      .home-title {
        position: absolute;
        top: 2vh;
        left: 4.5vw;
        z-index: 10;
      }

      .company-anim {
        font-family: 'Bebas Neue';
        font-size: 4vw;
        top:4vh;
        color: white;
        margin: 0;
        text-shadow: 4px 5px 12px rgba(0,0,0,0.7);
        opacity: 0;
        animation: slideFade 1.7s ease-out forwards;
      }

      @keyframes slideFade {
        0% { opacity: 0; transform: translate(-1.5vw, -1vh) scale(0.95);}
        100% { opacity: 1; transform: translate(0,0) scale(1);}
      } 

      @keyframes fade-slide-in {
        0% { opacity: 0; transform: translateY(2vh);}
        100% { opacity: 1; transform: translateY(0);}
      }

      /* Bottom-left paragraph */
      .dec {
        position: absolute;
        top: 87vh;
        left: 3.5vw;
        width: clamp(250px, 35vw, 500px);
        font-size: 6.7rem;
        font-weight: bold;
        color: white;
        background:transperent;
        text-align:start;
      }

      @media (max-width: 414px){
        .company-anim { font-size: 5vw; }
        .home-tagline { font-size: 5vw; left:14vw; top:15vw;}
        .dec { font-size: 0.35rem; width: 28vw; top:39vw; }
      }
        /* Extra small phones (<= 375px) */
@media (max-width: 375px) {
  .company-anim { font-size: 5vw; }
        .home-tagline { font-size: 5vw; left:14vw; top:15vw;}
        .dec { font-size: 0.35rem; width: 28vw; top:39vw; }
}

/* Small phones (376px - 414px) */
@media (min-width: 376px) and (max-width: 414px) {
   .company-anim { font-size: 5vw; }
   .home-tagline { font-size: 5vw; left:14vw; top:15vw;}
  .dec { font-size: 1.5vw; width: 28vw; }
}

/* Medium phones (415px - 430px) */
@media (min-width: 415px) and (max-width: 430px) {
  .company-anim { font-size: 5vw; }
        .home-tagline { font-size: 5vw; left:14vw; top:15vw;}
        .dec { font-size: 0.35rem; width: 28vw; top:39vw; }
}

/* Large phones / small tablets (431px - 768px) */
@media (min-width: 431px) and (max-width: 768px) {
 .company-anim { font-size: 5vw; }
        .home-tagline { font-size: 5vw; left:14vw; top:15vw;}
        .dec { font-size: 0.5rem; width: 28vw; top:39vw; }
}

/* Tablets / small laptops (769px - 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .company-anim { font-size: 5vw; }
        .home-tagline { font-size: 5vw; left:13vw; top:15vw;}
        .dec { font-size: 0.7rem; width: 28vw; top:39vw; }
}

/* Laptops / desktops (1025px - 1440px) */
@media (min-width: 1025px) and (max-width: 1440px) {
  .company-anim { font-size: 4.5vw; left: 20vw; }
        .home-tagline { font-size: 5vw; left:10vw; top:10vw;}
        .dec { font-size: 0.9rem; width: 28vw; top:39vw; }
}

/* Large desktops / 4k (1441px and above) */
@media (min-width: 1441px) {
  .company-anim { font-size: 5vw; }
        .home-tagline { font-size: 5vw; left:16vw; top:15vw;}
        .dec { font-size: 0.9rem; width: 28vw; top:39vw; }
}

    `}
  </style>


      {/*<button className="exploremore-button">Explore more</button>*/}
      <h1 className='service-tag'>Services we provide.</h1>
      <div className="key-features">
        <div className="card plane"  onClick={ goToairservice}>
          <img
            src="https://thumbs.dreamstime.com/b/sunset-silhouette-aircraft-ready-takeoff-vibrant-airport-generative-ai-amidst-stunning-sits-poised-runway-353330361.jpg"
            alt="Air Cargo" />
          <div className="plane-description" >
            <h2>Air Cargo Services</h2>
            <p>Fast and secure air freight connecting global destinations.</p>
          </div>
        </div>

        <div className="card ships"onClick={goToshipservice}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/100/020/large_2x/a-large-container-cargo-ship-can-be-seen-traveling-across-the-ocean-in-a-front-view-with-enough-free-photo.jpg" alt="background"/>
          <div className="ship-description" >
            <h2>Sea Cargo Services</h2>
            <p>Reliable and efficient shipping services with global coverage.</p>
          </div>
        </div>

        <div className="card warehouse" onClick={goTowarservice}>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.k-zOR0QVjanCgzvN-CpaeAHaEK?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Warehouse" />
          <div className="warehouse-description">
            <h2>Warehouse & Storage</h2>
            <p>Safe, optimized, and scalable warehousing for all logistics needs.</p>
          </div>
        </div>
        <div className="card custome"  onClick={goTocustservice}>
          <img
            src="https://amaccustoms.com.au/wp-content/uploads/2020/04/Transport-Logistics-01-1400x1037.jpg"
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
