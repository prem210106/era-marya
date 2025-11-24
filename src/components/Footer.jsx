const Footer = () => {
  const services = [
    { label: "Sea Freight Forward", href: "/sea" },
    { label: "Air Freight Forward", href: "/air" },
    { label: "Custom Clearance", href: "/custom" },
    { label: "Warehousing", href: "/warehousing" },
    { label: "ODC Logistics Support", href: "/Odc" },
    { label: "Project Shipments", href: "/Project" },
  ];

  const sitemapLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/service" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container-fluid">

        {/* spacing added here */}
        <div className="row gy-4" style={{ justifyContent: "space-around" }}>

          {/* Company Info */}
          <div className="col-lg-3 col-md-4 col-12">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.0YhbIQCXaSFU4yKvQe8tQAHaCN?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Logo"
              className="img-fluid mb-3 rounded"
              style={{ maxWidth: "180px" }}
            />

            <p className="fs-5">
              Era Marya Global Logistics Pvt. Ltd. is an ambitious freight
              forwarding and logistics company in India, building strong client
              relationships with innovative solutions.
            </p>
          </div>

          {/* Industry Sector */}
          <div className="col-lg-3 col-md-4 col-6">
            <h5 className="text-white fw-semibold mb-3 fs-3">Industry Sector</h5>
            <ul className="list-unstyled">
              {services.map((service) => (
                <li key={service.label} className="mb-2 fs-6">
                 <a
                    href={service.href}
                    className="text-light text-decoration-none"
                    style={{ transition: "0.3s" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.querySelector("span").style.color = "#FF8C00")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.querySelector("span").style.color = "white")
                    }
                  >
                    <span style={{ color: "white" }}>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap */}
          <div className="col-lg-3 col-md-4 col-6">
            <h5 className="text-white fs-4 fw-semibold mb-3">Sitemap</h5>
            <ul className="list-unstyled">
              {sitemapLinks.map((link) => (
                <li key={link.label} className="mb-2 fs-6">
                  <a
                    href={link.href}
                    className="text-light text-decoration-none"
                    style={{ transition: "0.3s" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.querySelector("span").style.color = "#FF8C00")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.querySelector("span").style.color = "white")
                    }
                  >
                    <span style={{ color: "white" }}>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 fs-5 pt-3 small">
          <p className="m-0">
            © 2023{" "}
            <span className="text-orange-600 fw-semibold">
              Era Marya Global Logistics Pvt. Ltd.
            </span>{" "}
            | Designed by{" "}
            <a
              href="https://techstrota.com/"
              target="_blank"
              rel="noreferrer"
              className="text-orange-600 fw-bold text-decoration-none"
            >
              TechStota
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;