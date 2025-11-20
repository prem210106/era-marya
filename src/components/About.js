import React from "react";
import "./About.css";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.h2
        className="about-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Era Marya Logistics
      </motion.h2>

      {/* Paragraph */}
      <motion.div
        className="border-l-4 border-orange-500 pl-4 text-gray-700 text-lg leading-7 text-justify"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p>
         At Era Marya Global Logistics Pvt. Ltd., we are dedicated to providing top-notch logistics solutions to businesses of
        all sizes.We are driven by a passion for excellence and a commitment to delivering outstanding service to our customers.
        Our team of experts has extensive knowledge and experience in the logistics industry, and we use this expertise to design
        customized solutions that meet the unique needs of each of our clients. From global coverage with local presence, to 
        competitive pricing and on-time delivery, we are committed to helping our clients achieve their goals and grow their businesses.
        Our dedication to quality is reflected in every aspect of our service, from our exceptional safety standards, to highly skilled 
        and motivated workforce, we can deliver your cargo with ease and efficiently, leveraging our knowledge of the shortest and most 
        efficient routes.
      </p>
      </motion.div>

      <br />
      <br />

      {/* Mission, Vision, Infrastructure Cards */}
      <div className="cards-section">
        {[
          {
            title: "🎯 Our Mission",
            description:
          "To provide world-class logistics solutions that ensure timely delivery and customer success. Ensuring customer satisfaction through innovation and continuous improvement. We continuously refine our operations to deliver greater efficiency, transparency, and value for every customer."
 
          },
          {
            title: "🚀 Our Vision",
            description:
          "To be the most trusted logistics partner by redefining speed, reliability, and transparency. Building a future-ready logistics ecosystem with smart technology. We aim to expand our capabilities with sustainable practices and next-generation logistics innovations."  
          },
          {
            title: "🏗 Infrastructure & 🌐 Network",
            description:
          "Strong infrastructure and a wide network enable fast, safe, and reliable logistics solutions. Our advanced fleet and well-connected hubs ensure seamless operations. We continuously upgrade our facilities and tracking systems to maintain smooth and efficient workflow."

          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="about-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: index * 0.2 }}
            onMouseEnter={(e) =>
              e.currentTarget.classList.add("border-warning", "shadow-lg")
            }
            onMouseLeave={(e) =>
              e.currentTarget.classList.remove("border-warning", "shadow-lg")
            }
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Certificates & Clients Cards */}
      <div className="cards-section bottom">
        {[
          {
            title: "📜 Certificate & 🏆 Achievements",
            text:
          "Recognized for our quality service and reliability, we’ve earned certifications and awards. Certified by leading industry bodies for excellence in safety and service. We continue to improve our standards with regular audits, compliance checks, and performance reviews."
          },
          {
            title: "🤝 Key Clients & 👥 Partners",
            text:
           "Trusted by top clients who rely on us for long-term logistics support. Our partnerships reflect commitment, speed, and operational reliability. We build long-term relationships through consistent performance, trust, and dedicated service."

          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="about-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: index * 0.2 }}
            onMouseEnter={(e) =>
              e.currentTarget.classList.add("border-warning", "shadow-lg")
            }
            onMouseLeave={(e) =>
              e.currentTarget.classList.remove("border-warning", "shadow-lg")
            }
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        className="why"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        <h3>Why Choose Us?</h3>

        <motion.ul>
          {[
            "✔️ Reliable and on-time delivery",
            "✔️ Modern technology and real-time tracking",
            "✔️ Experienced and dedicated team",
            "✔️ Strong focus on safety and quality",
            "✔️ 24/7 customer support",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              style={{ listStyle: "none", marginBottom: "0.5rem" }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default About;
