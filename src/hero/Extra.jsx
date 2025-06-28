 <div className="row" >
          <div className="col-md-12">
            <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
              <div className="col">
                <div className="product-item">
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src={Prod1} alt="Product Thumbnail" className="tab-image" />
                    </a>
                  </figure>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fs-6 fw-normal">Whole Wheat Sandwich Bread</h3>
                    <div>
                      <span className="rating">
                        <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning"></i>
                      </span>
                      <span>(222)</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <del>$24.00</del>
                      <span className="text-dark fw-semibold">$18.00</span>
                      <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                    </div>
                    <div className="button-area p-3 pt-0">
                      <div className="row g-1 mt-2">
                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value={quantity}
                        onChange={handleChange} min="1"/></div>
                        <div className="col-7"><a href="#" className="btn btn-success rounded-1 p-2 fs-7 btn-cart">
                        <i className="fas fa-cart-plus mr-5" style={{ fontSize: '15px', color: 'white', marginRight: '3px' }}></i>
                              Add to Cart</a></div>
                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><i className="fas fa-heart" style={{ color: 'white', fontSize: '18px' }}></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="product-item">
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src={Prod2} alt="Product Thumbnail" className="tab-image" />
                    </a>
                  </figure>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fs-6 fw-normal">Whole Grain Oatmeal</h3>
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
                      <del>$54.00</del>
                      <span className="text-dark fw-semibold">$50.00</span>
                      <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                    </div>
                    <div className="button-area p-3 pt-0">
                       <div className="row g-1 mt-2">
                         <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value={quantity}
                        onChange={handleChange} min="1"/></div>
                        <div className="col-7"><a href="#" className="btn btn-success rounded-1 p-2 fs-7 btn-cart">
                        <i className="fas fa-cart-plus mr-5" style={{ fontSize: '15px', color: 'white', marginRight: '3px' }}></i>
                              Add to Cart</a></div>
                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><i className="fas fa-heart" style={{ color: 'white', fontSize: '18px' }}></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 

         <div className="col">
                <div className="product-item">
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src={Prod3} alt="Product Thumbnail" className="tab-image" />
                    </a>
                  </figure>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fs-6 fw-normal">Sharp Cheddar Cheese Block</h3>
                    <div>
                      <span className="rating">
                       <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning"></i>
                      </span>
                      <span>(32)</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <del>$14.00</del>
                      <span className="text-dark fw-semibold">$12.00</span>
                      <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                    </div>
                    <div className="button-area p-3 pt-0">
                       <div className="row g-1 mt-2">
                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                        <div className="col-7"><a href="#" className="btn btn-success rounded-1 p-2 fs-7 btn-cart">
                        <i className="fas fa-cart-plus mr-5" style={{ fontSize: '15px', color: 'white', marginRight: '3px' }}></i>
                              Add to Cart</a></div>
                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><i className="fas fa-heart" style={{ color: 'white', fontSize: '18px' }}></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="product-item">
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src={Prod4} alt="Product Thumbnail" className="tab-image" />
                    </a>
                  </figure>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fs-6 fw-normal">Organic Baby Spinach</h3>
                    <div>
                      <span className="rating">
                       <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning"></i>
                      </span>
                      <span>(222)</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <del>$24.00</del>
                      <span className="text-dark fw-semibold">$18.00</span>
                      <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                    </div>
                    <div className="button-area p-3 pt-0">
                       <div className="row g-1 mt-2">
                        <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value={quantity}
                        onChange={handleChange} min="1"/></div>
                          <div className="col-7"><a href="#" className="btn btn-success rounded-1 p-2 fs-7 btn-cart">
                        <i className="fas fa-cart-plus mr-5" style={{ fontSize: '15px', color: 'white', marginRight: '3px' }}></i>
                              Add to Cart</a></div>
                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><i className="fas fa-heart" style={{ color: 'white', fontSize: '18px' }}></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="product-item">
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src={Prod5} alt="Product Thumbnail" className="tab-image" />
                    </a>
                  </figure>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fs-6 fw-normal">Organic Spinach Leaves (Fresh Produce)</h3>
                    <div>
                      <span className="rating">
                       <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning"></i>
                      </span>
                      <span>(222)</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <del>$24.00</del>
                      <span className="text-dark fw-semibold">$18.00</span>
                      <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                    </div>
                    <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                          <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value={quantity}
                        onChange={handleChange} min="1"/></div>
                        <div className="col-7"><a href="#" className="btn btn-success rounded-1 p-2 fs-7 btn-cart">
                        <i className="fas fa-cart-plus mr-5" style={{ fontSize: '15px', color: 'white', marginRight: '3px' }}></i>
                              Add to Cart</a></div>
                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><i className="fas fa-heart" style={{ color: 'white', fontSize: '18px' }}></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="product-item">
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src={Prod6} alt="Product Thumbnail" className="tab-image" />
                    </a>
                  </figure>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fs-6 fw-normal">Fresh Salmon</h3>
                    <div>
                      <span className="rating">
                        <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning"></i>
                      </span>
                      <span>(222)</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <del>$24.00</del>
                      <span className="text-dark fw-semibold">$18.00</span>
                      <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                    </div>
                    <div className="button-area p-3 pt-0">
                       <div className="row g-1 mt-2">
                     <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value={quantity}
                        onChange={handleChange} min="1"/></div>
                        <div className="col-7"><a href="#" className="btn btn-success rounded-1 p-2 fs-7 btn-cart">
                        <i className="fas fa-cart-plus mr-5" style={{ fontSize: '15px', color: 'white', marginRight: '3px' }}></i>
                              Add to Cart</a></div>
                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><i className="fas fa-heart" style={{ color: 'white', fontSize: '18px' }}></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="product-item">
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src={Prod7} alt="Product Thumbnail" className="tab-image" />
                    </a>
                  </figure>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fs-6 fw-normal">Imported Italian Spaghetti Pasta</h3>
                    <div>
                      <span className="rating">
                       <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning"></i>
                      </span>
                      <span>(222)</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <del>$24.00</del>
                      <span className="text-dark fw-semibold">$18.00</span>
                      <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                    </div>
                    <div className="button-area p-3 pt-0">
                       <div className="row g-1 mt-2">
                     <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value={quantity}
                        onChange={handleChange} min="1"/></div>
                        <div className="col-7"><a href="#" className="btn btn-success rounded-1 p-2 fs-7 btn-cart">
                        <i className="fas fa-cart-plus mr-5" style={{ fontSize: '15px', color: 'white', marginRight: '3px' }}></i>
                              Add to Cart</a></div>
                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><i className="fas fa-heart" style={{ color: 'white', fontSize: '18px' }}></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="product-item">
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src={Prod8} alt="Product Thumbnail" className="tab-image " />
                    </a>
                  </figure>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fs-6 fw-normal">Granny Smith Apples</h3>
                    <div>
                      <span className="rating">
                        <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning"></i>
                      </span>
                      <span>(222)</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <del>$24.00</del>
                      <span className="text-dark fw-semibold">$18.00</span>
                      <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                    </div>
                    <div className="button-area p-3 pt-0">
                      <div className="row g-1 mt-2">
                      <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value={quantity}
                        onChange={handleChange} min="1"/></div>
                        <div className="col-7"><a href="#" className="btn btn-success rounded-1 p-2 fs-7 btn-cart">
                        <i className="fas fa-cart-plus mr-5" style={{ fontSize: '15px', color: 'white', marginRight: '3px' }}></i>
                              Add to Cart</a></div>
                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><i className="fas fa-heart" style={{ color: 'white', fontSize: '18px' }}></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="product-item">
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src={Prod9} alt="Product Thumbnail" className="tab-image" />
                    </a>
                  </figure>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fs-6 fw-normal">Organic 2% Reduced Fat Milk </h3>
                    <div>
                      <span className="rating">
                        <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning"></i>
                      </span>
                      <span>(222)</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <del>$24.00</del>
                      <span className="text-dark fw-semibold">$18.00</span>
                      <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                    </div>
                    <div className="button-area p-3 pt-0">
                       <div className="row g-1 mt-2">
                       <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value={quantity}
                        onChange={handleChange} min="1"/></div>
                        <div className="col-7"><a href="#" className="btn btn-success rounded-1 p-2 fs-7 btn-cart">
                        <i className="fas fa-cart-plus mr-5" style={{ fontSize: '15px', color: 'white', marginRight: '3px' }}></i>
                              Add to Cart</a></div>
                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><i className="fas fa-heart" style={{ color: 'white', fontSize: '18px' }}></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="product-item">
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src={Prod10} alt="Product Thumbnail" className="tab-image" />
                    </a>
                  </figure>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fs-6 fw-normal">Greek Style Plain Yogurt</h3>
                    <div>
                      <span className="rating">
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning me-1"></i>
                         <i className="fas fa-star text-warning"></i>
                      </span>
                      <span>(222)</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <del>$24.00</del>
                      <span className="text-dark fw-semibold">$18.00</span>
                      <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                    </div>
                    <div className="button-area p-3 pt-0">
                       <div className="row g-1 mt-2">
                     <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value={quantity}
                        onChange={handleChange} min="1"/></div>
                        <div className="col-7"><a href="#" className="btn btn-success rounded-1 p-2 fs-7 btn-cart">
                        <i className="fas fa-cart-plus mr-5" style={{ fontSize: '15px', color: 'white', marginRight: '3px' }}></i>
                              Add to Cart</a></div>
                        <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><i className="fas fa-heart" style={{ color: 'white', fontSize: '18px' }}></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}