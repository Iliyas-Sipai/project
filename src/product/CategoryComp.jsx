import React, { useEffect, useState, useRef, useContext } from 'react';
import { CartContext } from '../cart/CartContext';


const CategoryComp = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const sectionRef = useRef(null);
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const qty = {};
        data.forEach((p) => (qty[p.id] = 1));
        setQuantities(qty);
      });
  }, []);

  const handleChange = (e, id) => {
    setQuantities({ ...quantities, [id]: parseInt(e.target.value) || 1 });
  };
  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
       <section className="pb-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between my-4">
              <h2 className="section-title">Best selling products</h2>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4" ref={sectionRef}>
        {products.map((product) => (
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
    </>
  )
}

export default CategoryComp
