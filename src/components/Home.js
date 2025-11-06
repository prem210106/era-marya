import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Tech Store</h1>

      <div className="home-content">
        <p>
          Tech Store is your one-stop destination for the latest gadgets and
          electronics. From smartphones and laptops to gaming accessories, we
          bring you cutting-edge technology at the best prices.
        </p>

        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
          alt="Laptop and gadgets"
          className="home-image"
        />

        <p>
          Our goal is to make technology accessible to everyone. We carefully
          select high-quality products from trusted brands and offer
          exceptional customer service for a seamless shopping experience.
        </p>

        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Team working on tech"
          className="home-image"
        />

        <p>
          Whether you’re upgrading your workspace, building a gaming setup, or
          exploring smart home devices — Tech Store has got you covered.
          Discover innovation today!
        </p>
      </div>
    </div>
  );
};

export default Home;
