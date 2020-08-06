import React from "react";

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to="/products">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </Link>

            <div className="sb-sidenav-menu-heading">Main</div>
            <a     className="nav-link collapsed"    href="#"   data-toggle="collapse"  data-target="#collapseProduct"
              aria-expanded="false"    aria-controls="collapseLayouts"  >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns" />
              </div>
              Product
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapseProduct"
              aria-labelledby="headingOne"
              data-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="/admin/product/add">
                  Add new
                </Link>
                <Link className="nav-link" to="/admin/products">
                  List Product
                </Link>
              </nav>
            </div>
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns" />
              </div>
              Category
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="/admin/category/add">
                  Add new
                </Link>
                <Link className="nav-link" to="/admin/categories">
                  List Category
                </Link>
              </nav>
            </div>
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open" />
              </div>
              Pages
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                >
                  Authentication
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="pagesCollapseAuth"
                  aria-labelledby="headingOne"
                  data-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="login.html">
                      Login
                    </a>
                    <a className="nav-link" href="register.html">
                      Register
                    </a>
                    <a className="nav-link" href="password.html">
                      Forgot Password
                    </a>
                  </nav>
                </div>
                <a
                  className="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#pagesCollapseError"
                  aria-expanded="false"
                  aria-controls="pagesCollapseError"
                >
                  Error
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </a>
                <div
                  className="collapse"
                  id="pagesCollapseError"
                  aria-labelledby="headingOne"
                  data-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="401.html">
                      401 Page
                    </a>
                    <a className="nav-link" href="404.html">
                      404 Page
                    </a>
                    <a className="nav-link" href="500.html">
                      500 Page
                    </a>
                  </nav>
                </div>
              </nav>
            </div>
            <div className="sb-sidenav-menu-heading">Community</div>
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseBlog"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns" />
              </div>
              Blog
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapseBlog"
              aria-labelledby="headingOne"
              data-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="/admin/blog/add">
                  Add new
                </Link>
                <Link className="nav-link" to="/admin/blogs">
                  List Blog
                </Link>
              </nav>
            </div>
            <a className="nav-link" href="tables.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Tables
            </a>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
