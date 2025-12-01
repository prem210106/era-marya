import React, { useState } from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    {
      img: "https://d23xypyp2dkdqm.cloudfront.net/wp-content/uploads/2022/01/31034059/woman-hand-accepting-delivery-boxes-from-deliveryman-1-1024x683.jpg",
      title: "Fast & Reliable Delivery",
      desc: "We ensure your goods reach their destination safely with our trusted logistics network.",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/018/926/758/non_2x/expertise-expert-consulting-knowledge-team-advice-trust-and-research-concept-business-person-hand-holding-expertise-icon-on-virtual-screen-business-and-development-photo.jpg",
      title: "Customs Expertise",
      desc: "Our experienced customs team simplifies the clearance process for smooth international trade.",
    },
    {
      img: "https://tse3.mm.bing.net/th/id/OIP.i6bxRUTRDXc75JbaPGYeewHaEo?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Global Network",
      desc: "With a vast global network, we offer cost-effective routes and strong partnerships worldwide.",
    },
    {
      img: "https://www.salesforce.com/ca/blog/wp-content/uploads/sites/12/2023/10/247-customer-service-og.jpg",
      title: "24/7 Customer Support",
      desc: "We are always available to assist our clients with reliable and responsive customer service.",
    },
  ];

  return (
    <div className="why-choose-us">
      <div className="card-scroll">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`why-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

