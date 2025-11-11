import React from "react";
import "./About.css"
function About() {
  return (
    <div className="about">  
      <h3>About Us -  Company</h3>
        <h2 className="tag">
        Providing <br />
        World-Class <br />
     	Logistic Solutions
      </h2>

      <section className="section">
        <h2>Company Background</h2>
        <p>
          Era Logistics Company is a trusted name in logistics and supply chain management.
          We specialize in providing reliable transportation, warehousing, and distribution
          services across India and abroad.
        </p>
        <p>
          With years of experience, we ensure safe, timely, and cost-effective delivery
          solutions for our clients.
        </p>
      </section>

      <section className="section">
        <h3>Our Mission</h3>
        <p>
          To deliver efficient, transparent, and technology-driven logistics services
          that add value to our customers' business operations.
        </p>
      </section>

      <section className="section">
        <h3>Our Vision</h3>
        <p>
          To be recognized as a leading global logistics partner known for excellence,
          reliability, and customer satisfaction.
        </p>
      </section>

      <section className="section">
        <h3>Infrastructure and Networks</h3>
        <p>
          Era Logistics has a strong operational network with regional offices,
          modern warehouses, GPS-enabled fleets, and advanced tracking systems.
        </p>
        <p>
          Our digital infrastructure supports real-time shipment tracking and efficient
          route planning.
        </p>
      </section>

      <section className="section achievements-section">
        

        <div className="certificates">
          <h4>Certificates</h4>
          <ul>
            <li>ISO 9001:2015 Certified - Quality Management Systems</li>
            <li>ISO 14001:2015 Certified - Environmental Management Systems</li>
            <li>Member of FIATA - International Federation of Freight Forwarders Associations</li>
            <li>Authorized Economic Operator  Certified</li>
          </ul>
        </div>

        <div className="achievements">
          <h4>Achievements</h4>
          <ul>
            <li>“Best Logistics Service Provider 2023” National Supply Chain Association</li>
            <li>Operations in 50+ Indian cities and 10+ international locations</li>
            <li>10,000+ successful annual shipments with 99% on-time delivery</li>
            <li>Partnerships with global FMCG, automotive, and e-commerce brands</li>
            <li>Implemented AI-based route optimization and tracking systems</li>
          </ul>
        </div>
      </section>
       <section className="key clients">
	<h3>Key clients and partners</h3>
	<div className="key clients">
	<ul>
        	<li> <h4>key clients</h4></li>
       		<li>1.Tata Motors Ltd. - Transportation and supply chain management for automotive components.</li>
		<li>2.Nestlé India Pvt. Ltd. - Nationwide FMCG product distribution and cold-chain logistics.</li>
		<li>3.Amazon India - E-commerce warehousing and last-mile delivery operations.</li>
	</ul>
	</div>

	<div className="Key-partners">
	<ul>
		<li><h4>Key-partners</h4></li>
		<li>1.DHL Supply Chain India- International freight forwarding and express delivery services.</li>
		<li>2.Maersk Line - Global ocean freight and container shipping network.</li>
		<li>3.Container Corporation of India (CONCOR) - Rail and intermodal transport solutions.</li>	
	</ul>
	</div>
	 </section> 
     
      <div className= "company details">
        <section className="Section comapny">
        <h1>About Era Marya Global Logistics Pvt. Ltd.</h1>
        <p>
          At Era Marya Global Logistics Pvt. Ltd., we are dedicated to providing top-notch logistics solutions to businesses of all sizes.
           We are driven by a passion for excellence and a commitment to delivering outstanding service to our customers.
         </p>
         <p>
          Our team of experts has extensive knowledge and experience in the logistics industry, and we use this expertise to design customized 
          solutions that meet the unique needs of each of our clients. From global coverage with local presence, to competitive pricing and 
          on-time delivery, we are committed to helping our clients achieve their goals and grow their businesses.
         </p>
         <p>
          Our dedication to quality is reflected in every aspect of our service, from our exceptional safety standards,
           to highly skilled and motivated workforce, we can deliver your cargo with ease and efficiently, leveraging our 
           knowledge of the shortest and most efficient routes.
        </p>
        <p>
          At Era Marya Global Logistics Pvt. Ltd., we believe that success is all about building strong relationships with our clients. 
          That's why we are dedicated to building long-lasting partnerships based on trust, reliability, and mutual success. If you're 
          looking for a logistics partner that will help you reach your goals and take your business to the next level, choose Era Marya 
          Global Logistics Pvt. Ltd..
         </p>

        </section>
        </div>
      </div>
  );
}
export default About;