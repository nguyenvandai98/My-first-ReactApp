import React from "react";
import { useParams } from "react-router-dom";

export const SingleProduct = ({ products }) => {
  console.log(products);
  const { id } = useParams();
  // const { name, price, quantity, sale, status, description, image } = products.find((products) => products.id == id);
  const prod = products.find((products) => products.id == id);
  console.log(prod);
  return (
    <section className="product-shop spad page-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="filter-widget">
              <h4 className="fw-title">Categories</h4>
              <ul className="filter-catagories">
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Kids</a>
                </li>
              </ul>
            </div>
            <div className="filter-widget">
              <h4 className="fw-title">Brand</h4>
              <div className="fw-brand-check">
                <div className="bc-item">
                  <label htmlFor="bc-calvin">
                    Calvin Klein
                    <input type="checkbox" id="bc-calvin" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="bc-item">
                  <label htmlFor="bc-diesel">
                    Diesel
                    <input type="checkbox" id="bc-diesel" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="bc-item">
                  <label htmlFor="bc-polo">
                    Polo
                    <input type="checkbox" id="bc-polo" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="bc-item">
                  <label htmlFor="bc-tommy">
                    Tommy Hilfiger
                    <input type="checkbox" id="bc-tommy" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-widget">
              <h4 className="fw-title">Price</h4>
              <div className="filter-range-wrap">
                <div className="range-slider">
                  <div className="price-input">
                    <input type="text" id="minamount" />
                    <input type="text" id="maxamount" />
                  </div>
                </div>
                <div
                  className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  data-min={33}
                  data-max={98}
                >
                  <div className="ui-slider-range ui-corner-all ui-widget-header" />
                  <span
                    tabIndex={0}
                    className="ui-slider-handle ui-corner-all ui-state-default"
                  />
                  <span
                    tabIndex={0}
                    className="ui-slider-handle ui-corner-all ui-state-default"
                  />
                </div>
              </div>
              <a href="#" className="filter-btn">
                Filter
              </a>
            </div>
            <div className="filter-widget">
              <h4 className="fw-title">Color</h4>
              <div className="fw-color-choose">
                <div className="cs-item">
                  <input type="radio" id="cs-black" />
                  <label className="cs-black" htmlFor="cs-black">
                    Black
                  </label>
                </div>
                <div className="cs-item">
                  <input type="radio" id="cs-violet" />
                  <label className="cs-violet" htmlFor="cs-violet">
                    Violet
                  </label>
                </div>
                <div className="cs-item">
                  <input type="radio" id="cs-blue" />
                  <label className="cs-blue" htmlFor="cs-blue">
                    Blue
                  </label>
                </div>
                <div className="cs-item">
                  <input type="radio" id="cs-yellow" />
                  <label className="cs-yellow" htmlFor="cs-yellow">
                    Yellow
                  </label>
                </div>
                <div className="cs-item">
                  <input type="radio" id="cs-red" />
                  <label className="cs-red" htmlFor="cs-red">
                    Red
                  </label>
                </div>
                <div className="cs-item">
                  <input type="radio" id="cs-green" />
                  <label className="cs-green" htmlFor="cs-green">
                    Green
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-widget">
              <h4 className="fw-title">Size</h4>
              <div className="fw-size-choose">
                <div className="sc-item">
                  <input type="radio" id="s-size" />
                  <label htmlFor="s-size">s</label>
                </div>
                <div className="sc-item">
                  <input type="radio" id="m-size" />
                  <label htmlFor="m-size">m</label>
                </div>
                <div className="sc-item">
                  <input type="radio" id="l-size" />
                  <label htmlFor="l-size">l</label>
                </div>
                <div className="sc-item">
                  <input type="radio" id="xs-size" />
                  <label htmlFor="xs-size">xs</label>
                </div>
              </div>
            </div>
            <div className="filter-widget">
              <h4 className="fw-title">Tags</h4>
              <div className="fw-tags">
                <a href="#">Towel</a>
                <a href="#">Shoes</a>
                <a href="#">Coat</a>
                <a href="#">Dresses</a>
                <a href="#">Trousers</a>
                <a href="#">Men's hats</a>
                <a href="#">Backpack</a>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-pic-zoom">
                  <img className="product-big-img" src={prod.image} alt="" width='440' height='520' />
                  <div className="zoom-icon">
                    <i className="fa fa-search-plus" />
                  </div>
                </div>
              </div>
                <div className="col-lg-6">
                  <div className="product-details">
                    <div className="pd-title">
                      <span>oranges</span>
                      <h3>{prod.name}</h3>
                      <a href="#" className="heart-icon">
                        <i className="icon_heart_alt" />
                      </a>
                    </div>
                    <div className="pd-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                      <span>(5)</span>
                    </div>
                    <div className="pd-desc">
                      <p></p>
                      <h4>
                        ${prod.price - (prod.price / 100) * prod.sale}{" "}
                        <span>${prod.price}</span>
                      </h4>
                    </div>
                    <div className="pd-color">
                      <h6>Color</h6>
                      <div className="pd-color-choose">
                        <div className="cc-item">
                          <input type="radio" id="cc-black" />
                          <label htmlFor="cc-black" />
                        </div>
                        <div className="cc-item">
                          <input type="radio" id="cc-yellow" />
                          <label htmlFor="cc-yellow" className="cc-yellow" />
                        </div>
                        <div className="cc-item">
                          <input type="radio" id="cc-violet" />
                          <label htmlFor="cc-violet" className="cc-violet" />
                        </div>
                      </div>
                    </div>
                    <div className="pd-size-choose">
                      <div className="sc-item">
                        <input type="radio" id="sm-size" />
                        <label htmlFor="sm-size">s</label>
                      </div>
                      <div className="sc-item">
                        <input type="radio" id="md-size" />
                        <label htmlFor="md-size">m</label>
                      </div>
                      <div className="sc-item">
                        <input type="radio" id="lg-size" />
                        <label htmlFor="lg-size">l</label>
                      </div>
                      <div className="sc-item">
                        <input type="radio" id="xl-size" />
                        <label htmlFor="xl-size">xs</label>
                      </div>
                    </div>
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="text" defaultValue={1} />
                      </div>
                      <a href="#" className="primary-btn pd-cart">
                        Add To Cart
                      </a>
                    </div>
                    <ul className="pd-tags">
                      <li>
                        <span>CATEGORIES</span>: More Accessories, Wallets &amp;
                        Cases
                      </li>
                      <li>
                        <span>TAGS</span>: Clothing, T-shirt, Woman
                      </li>
                    </ul>
                    <div className="pd-share">
                      <div className="p-code">Sku : 00012</div>
                      <div className="pd-social">
                        <a href="#">
                          <i className="ti-facebook" />
                        </a>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                        <a href="#">
                          <i className="ti-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
