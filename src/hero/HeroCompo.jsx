import React from "react";
import { Link } from "react-router-dom";
import  { useEffect, useState, useRef, useContext } from 'react';
import { CartContext } from "../cart/CartContext";
import '../hero/HeroStyle.css'
import bannerImage from '../assets/banner-1.jpg';
import banner01 from '../assets/banner-ad-1.jpg'
import banner02 from '../assets/banner-ad-2.jpg'
import banner03 from '../assets/banner-ad-3.jpg'



const HeroCompo = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState('all');
  const [quantities, setQuantities] = useState({});
  const sectionRef = useRef(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setAllProducts(data);
        setDisplayedProducts(data);
        const initialQty = {};
        data.forEach(p => {
          initialQty[p.id] = 1;
        });
        setQuantities(initialQty);
      });

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const handleChange = (e, productId) => {
    setQuantities({ ...quantities, [productId]: parseInt(e.target.value) });
  };

  const filterByCategory = (category) => {
    setSelected(category);
    if (category === 'all') {
      setDisplayedProducts(allProducts);
    } else {
      const filtered = allProducts.filter(p => p.category === category);
      setDisplayedProducts(filtered);
    }
  };

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddToCart = (product) => {
    const qty = quantities[product.id] || 1;
    addToCart(product, qty);
  };
  return (
<>
 {/* hreo section ************************** */}
      <section
            style={{
              backgroundImage: `url(${bannerImage})`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover"
         }}>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 pt-5 mt-5">
            <h2 className="display-1 ls-1"><span className="fw-bold text-success">GoShope</span>Smart Tech at<span className="fw-bold">Doorsteps</span></h2>
            <p className="fs-4">Latest gadgets. Fast delivery. Great prices.</p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-success text-uppercase fs-6 rounded-pill px-4 py-3 mt-3" onClick={scrollToSection}>Start Shopping</a>
              <a href="#" className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Join Now</a>
            </div>
            <div className="row my-5">
              <div className="col">
                <div className="row text-dark">
                  <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">14k+</p></div>
                  <div className="col"><p className="text-uppercase lh-sm mb-0">Product Varieties</p></div>
                </div>
              </div>
              <div className="col">
                <div className="row text-dark">
                  <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">50+</p></div>
                  <div className="col"><p className="text-uppercase lh-sm mb-0">Happy Customers</p></div>
                </div>
              </div>
              <div className="col">
                <div className="row text-dark">
                  <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">10+</p></div>
                  <div className="col"><p className="text-uppercase lh-sm mb-0">Store Locations</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-0 justify-content-center">
          <div className="col">
            <div className="card border-0 bg-success rounded-0 p-4 text-light">
              <div className="row">
                <div className="col-md-3 text-center">
                  <svg width="60" height="60"></svg>
                </div>
                <div className="col-md-9">
                  <div className="card-body p-0">
                    <h5 className="text-light">Fresh from farm</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 bg-dark rounded-0 p-4 text-light">
              <div className="row">
                <div className="col-md-3 text-center">
                  <svg width="60" height="60"></svg>
                </div>
                <div className="col-md-9">
                  <div className="card-body p-0">
                    <h5 className="text-light">100% Organic</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 bg-danger rounded-0 p-4 text-light">
              <div className="row">
                <div className="col-md-3 text-center">
                  <svg width="60" height="60"></svg>
                </div>
                <div className="col-md-9">
                  <div className="card-body p-0">
                    <h5 className="text-light">Free delivery</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
{/* *************************************************** */}
    {/* Product */} 
   <section className="pb-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between my-4">
              <h2 className="section-title">Best selling products</h2>
              <div className="d-flex align-items-center">
                <button onClick={scrollToSection} className="btn btn-primary rounded-1">View All</button>
              </div>
            </div>
          </div>
        </div>

{/* Category Buttons */}
      <div className="d-flex gap-3 flex-wrap mb-4">
        <button
          className={`btn ${selected === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => filterByCategory('all')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn ${selected === cat ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => filterByCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="row row-cols-1 row-cols-md-4 g-4" ref={sectionRef}>
        {displayedProducts.map((product) => (
          <div className="col" key={product.id}>
            <div className="product-item">
              <figure>
                <a href="#" title={product.title}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="tab-image"
                    style={{ height: '150px', objectFit: 'contain' }}
                  />
                </a>
              </figure>
              <div className="d-flex flex-column text-center">
                <h3 className="fs-6 fw-normal">{product.title}</h3>
                <div>
                  <span className="rating">
                    <i className="fas fa-star text-warning me-1"></i>
                    <i className="fas fa-star text-warning me-1"></i>
                    <i className="fas fa-star text-warning me-1"></i>
                    <i className="fas fa-star text-warning me-1"></i>
                    <i className="fas fa-star text-warning"></i>
                  </span>
                  <span>(41)</span>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <del>₹{(product.price + 10).toFixed(2)}</del>
                  <span className="text-dark fw-semibold">₹{product.price.toFixed(2)}</span>
                  <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                </div>
                <div className="button-area p-3 pt-0">
                  <div className="row g-1 mt-2">
                    <div className="col-3">
                      <input
                        type="number"
                        className="form-control"
                        value={quantities[product.id] || 1}
                        onChange={(e) => handleChange(e, product.id)}
                        min="1"
                      />
                    </div>
                    <div className="col-7">
                      <a
                        href="#"
                        className="btn btn-success w-100"
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                      >
                        Add to Cart
                      </a>
                    </div>
                    <div className="col-2">
                      <a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6">
                        <i className="fas fa-heart" style={{ fontSize: '18px' }}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    {/* // banner  */}
  <section className="py-4">
       <div className="container-lg">
         <div className="row g-3">
 
           <div className="col-md-8">
             <div
               className="d-flex align-items-center text-white h-100"
               style={{
                 backgroundImage: `url(${banner01})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 minHeight: '450px'
               }}>
               <div className="p-4">
                 <h2 className="fw-bold">Items on SALE</h2>
                 <p>Discounts up to 30%</p>
                 <a href="#" className="btn btn-outline-light">SHOP NOW</a>
               </div>
             </div>
           </div>
 
           <div className="col-md-4 d-flex flex-column justify-content-between gap-3 w-40">
             <div
               className="text-white"
               style={{
                 backgroundImage: `url(${banner02})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 minHeight: '300px',
               }}
             >
               <div className="p-4 text-primary" >
                 <h4 className="fw-bold ">Combo offers</h4>
                 <p>Discounts up to 50%</p>
                 <a href="#" className="btn btn-outline-dark btn-sm">SHOP NOW</a>
               </div>
             </div>
             <div
               className="text-white"
               style={{
                 backgroundImage: `url(${banner03})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 minHeight: '300px',
               }}
             >
               <div className="p-4">
                 <h4 className="fw-bold">Discount Coupons</h4>
                 <p>Discounts up to 40%</p>
                 <a href="#" className="btn btn-outline-light btn-sm">SHOP NOW</a>
               </div>
             </div>
           </div>
 
         </div>
       </div>
     </section>     
     </>  
        
  )
}

export default HeroCompo
