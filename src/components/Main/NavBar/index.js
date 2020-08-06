import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="ht-left">
              <div className="mail-service">
                <i className=" fa fa-envelope" />
                hello.colorlib@gmail.com
              </div>
              <div className="phone-service">
                <i className=" fa fa-phone" />
                +65 11.188.888
              </div>
            </div>
            <div className="ht-right">
              <Link to='/login' className="login-panel"><i className="fa fa-user" />Login</Link>

              <div className="top-social">
                <a href="#"><i className="ti-facebook" /></a>
                <a href="#"><i className="ti-twitter-alt" /></a>
                <a href="#"><i className="ti-linkedin" /></a>
                <a href="#"><i className="ti-pinterest" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inner-header">
            <div className="row">
              <div className="col-lg-2 col-md-2">
                <div className="logo">
                  <Link to="/">
                    <img src={require("../../../assets/img/logo.png")} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-lg-7">
                <div className="advanced-search">
                  <button type="button" className="category-btn">All Categories</button>
                  <form action="#" className="input-group">
                    <input type="text" placeholder="What do you need?" />
                    <button type="button"><i className="ti-search" /></button>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 text-right col-lg-3">
                <ul className="nav-right">
                  <li className="heart-icon"><a href="#">
                      <i className="icon_heart_alt" />
                      <span>1</span>
                    </a>
                  </li>
                  <li className="cart-icon"><a href="#">
                      <i className="icon_bag_alt" />
                      <span>3</span>
                    </a>
                    <div className="cart-hover">
                      <div className="select-items">
                        <table>
                          <tbody>
                            <tr>
                              <td className="si-pic"><img src="img/select-product-1.jpg" alt="" /></td>
                              <td className="si-text">
                                <div className="product-selected">
                                  <p>$60.00 x 1</p>
                                  <h6>Kabino Bedside Table</h6>
                                </div>
                              </td>
                              <td className="si-close">
                                <i className="ti-close" />
                              </td>
                            </tr>
                            <tr>
                              <td className="si-pic"><img src="img/select-product-2.jpg" alt="" /></td>
                              <td className="si-text">
                                <div className="product-selected">
                                  <p>$60.00 x 1</p>
                                  <h6>Kabino Bedside Table</h6>
                                </div>
                              </td>
                              <td className="si-close">
                                <i className="ti-close" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="select-total">
                        <span>total:</span>
                        <h5>$120.00</h5>
                      </div>
                      <div className="select-button">
                        <Link to="/Cart" className="primary-btn view-card">VIEW CARD</Link>
                        <Link to="/checkout" className="primary-btn checkout-btn">CHECK OUT</Link>
                      </div>
                    </div>
                  </li>
                  <li className="cart-price">$150.00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <div className="container">
            <div className="nav-depart">
              <div className="depart-btn">
                <i className="ti-menu" />
                <span>All departments</span>
                <ul className="depart-hover">
                  <li className="active"><a href="#">Women’s Clothing</a></li>
                  <li><a href="#">Men’s Clothing</a></li>
                  <li><a href="#">Underwear</a></li>
                  <li><a href="#">Kid's Clothing</a></li>
                  <li><a href="#">Brand Fashion</a></li>
                  <li><a href="#">Accessories/Shoes</a></li>
                  <li><a href="#">Luxury Brands</a></li>
                  <li><a href="#">Brand Outdoor Apparel</a></li>
                </ul>
              </div>
            </div>
            <nav className="nav-menu mobile-menu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><a href="#">Collection</a>
                  <ul className="dropdown">
                    <li><a href="#">Men's</a></li>
                    <li><a href="#">Women's</a></li>
                    <li><a href="#">Kid's</a></li>
                  </ul>
                </li>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href="./contact.html">Contact</a></li>
                <li><a href="#">Pages</a>
                  <ul className="dropdown">
                    <li><a href="./blog-details.html">Blog Details</a></li>
                    <li><Link href="/Cart">Shopping Cart</Link></li>
                    <li><Link href="/checkout">Checkout</Link></li>

                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div id="mobile-menu-wrap" />
          </div>
        </div>
      </header>
    )
}