import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about-container">
      {/* Header */}
      <h2 className="about-header">About era marya logistics </h2>

      {/* Short Paragraph */}
     <div className="border-l-4 border-orange-500 pl-4 text-gray-700 text-lg leading-7 text-justify">

     <p>
  At Era Marya Logistics Company, we specialize in delivering efficient, reliable, and 
  technology-driven logistics solutions that simplify the movement of goods and connect 
  businesses globally. Founded in 2022, our company began with a vision to redefine 
  logistics through innovation, transparency, and customer trust  Over the years, 
  we’ve grown from a small startup into a dynamic logistics network, offering 
  customized transport, warehousing, and supply chain solutions across diverse industries. 
  With advanced infrastructure, real-time tracking systems, and a dedicated team, we ensure 
  every delivery is handled with precision, safety, and care — making us a trusted partner in 
  driving business success.
</p>
</div>
<br /> <br />
      {/* Mission, Vision, Infrastructure Cards */}
      <div className="cards-section">
        <div className="about-card">
          <h3>🎯Our Mission</h3>
          <p>
            To provide world-class logistics solutions that ensure timely
            delivery and customer success.
          </p>
        </div>
        <div className="about-card">
          <h3>🚀Our Vision</h3>
          <p>
            To be the most trusted logistics partner by redefining speed,
            reliability, and transparency.
          </p>
        </div>
        <div className="about-card">
          <h3>🏗Infrastructure & 
            🌐Network</h3>
          <p>
            Strong infrastructure and wide network enable us to deliver fast, safe, and reliable logistics solutions across multiple locations.
           </p>
        </div>
      </div>

      {/* Certificates & Clients Cards */}
      <div className="cards-section bottom">
        <div className="about-card">
          <h3>📜Certifiacte &< br />
            🏆Achievements</h3>
          <p>
            Recognized for our quality service and reliability, we’ve earned industry certifications and multiple awards for excellence in logistics and customer satisfaction.
            </p>
        </div>
        <div className="about-card">
          <h3>🤝Key Clients & <br />
            👥Partners</h3>
          <p>
            Trusted by leading clients and partners who rely on us for consistent, efficient, and long-term logistics support
          </p>
        </div>
      </div>
      <div className="why">
        <h3>Why Choose Us?</h3>
         <ul>
        <li>✔️ Reliable and on-time delivery </li>
        <li>✔️ Modern technology and real-time tracking</li>                             
        <li>✔️ Experienced and dedicated team</li>
        <li>✔️ Strong focus on safety and quality</li>
        <li>✔️ 24/7 customer support</li>
        </ul>
      </div>
    </div>

  );
}
export default About;