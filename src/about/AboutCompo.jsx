import React from 'react';
import aboutImage from '../assets/about-image.jpg'; // Use your own image

function AboutCompo() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">About Us</h1>

      {/* Section: Who We Are */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src={aboutImage} alt="About" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h3>Who We Are</h3>
          <p>
            We are an online store offering a wide range of products — from fashion and electronics to home essentials.
            Our goal is to bring quality products to your doorstep at unbeatable prices, with a smooth and satisfying shopping experience.
          </p>
        </div>
      </div>

      {/* Section: Mission & Vision */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h4>🎯 Our Mission</h4>
          <p>To provide a convenient, affordable, and reliable e-commerce platform for everyone.</p>
        </div>
        <div className="col-md-6">
          <h4>🌟 Our Vision</h4>
          <p>To be a trusted destination for online shopping by focusing on variety, quality, and customer satisfaction.</p>
        </div>
      </div>

     {/* Section: Why Choose Us */}
<h3 className="text-center mb-4">Why Choose Us</h3>
<div className="row text-center">
  <div className="col-md-4">
    <div className="p-4 border rounded shadow-sm h-100">
      <h5>🛍️ Wide Product Range</h5>
      <p>From fashion to gadgets — find everything you need in one place.</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="p-4 border rounded shadow-sm h-100">
      <h5>⚡ Fast & Secure Delivery</h5>
      <p>Timely and secure delivery across locations, with real-time updates.</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="p-4 border rounded shadow-sm h-100">
      <h5>🙋 Friendly Support</h5>
      <p>Our support team is here to help you every step of the way.</p>
    </div>
  </div>
</div>
</div>
  );
}

export default AboutCompo;
