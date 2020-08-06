import React from 'react'
import { Breadcrumb } from './Breadcrumb'

export const Login = () => {
    return (
        <div>
            <Breadcrumb></Breadcrumb>
            <div className="register-login-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="login-form">
                <h2>Login</h2>
                <form action="#">
                  <div className="group-input">
                    <label htmlFor="username">Username or email address *</label>
                    <input type="text" id="username" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="pass">Password *</label>
                    <input type="text" id="pass" />
                  </div>
                  <div className="group-input gi-check">
                    <div className="gi-more">
                      <label htmlFor="save-pass">
                        Save Password
                        <input type="checkbox" id="save-pass" />
                        <span className="checkmark" />
                      </label>
                      <a href="#" className="forget-pass">Forget your Password</a>
                    </div>
                  </div>
                  <button type="submit" className="site-btn login-btn">Sign In</button>
                </form>
                <div className="switch-login">
                  <a href="./register.html" className="or-login">Or Create An Account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
