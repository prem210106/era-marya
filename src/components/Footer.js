
import "./Footer.css";

const Footer = () => {
  const services = [
  { label: "Sea Freight Forward", href: "/sea" },
  { label: "Air Freight Forward", href: "/air" },
  { label: "Custom Clearance", href: "/custom" },
  { label: "Warehousing", href: "/warehousing" },
];


  const sitemapLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/service" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info Section */}
          <div className="footer-section">
            
      <img src="https://tse2.mm.bing.net/th/id/OIP.0YhbIQCXaSFU4yKvQe8tQAHaCN?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Logo" className="mb-3 ml-0 w-60 h-30 rounded-3" />
            <p className="footer-description ml-0">
              Era Marya Global Logistics Pvt. Ltd. is ambitious freight forwarding and Logistics Company in India, eager to make a positive impact in the industry with innovative logistics solutions. we are determined to build strong relationships with our clients and work tirelessly to support and grow with them.
            </p>
          </div>

          {/* Industry Sector Section */}
          <div className="footer-section">
            <h3 className="footer-heading">
              Industry Sector
            </h3>
            <ul className="footer-list">
  {services.map((service) => (
    <li key={service.label}>
      <a href={service.href} className="footer-link">
        {service.label}
      </a>
    </li>
  ))}
</ul>

          </div>

          {/* Sitemap Section */}
          <div className="footer-section">
            <h3 className="footer-heading">
              Sitemap
            </h3>
            <ul className="footer-list">
              {sitemapLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="headline">
      
      <p>"Copyright © 2023"
        <span>Era Marya Global Logistics Pvt. Ltd.</span>"Designed by"
        <a href="https://techstrota.com/" target="_blank" rel="noreferrer">
         <span class="color">TechStota</span>
        </a></p>
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
