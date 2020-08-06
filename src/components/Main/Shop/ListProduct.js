import React from 'react'
import { Link } from 'react-router-dom';

export const ListProduct = ({products}) => {
  console.log(products);
    return (
        <div className="col-lg-9 order-1 order-lg-2">
        <div className="product-show-option">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="select-option">
                <select className="sorting">
                  <option value>Default Sorting</option>
                </select>
                <select className="p-show">
                  <option value>Show:</option>
                </select>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 text-right">
              <p>Show 01- 09 Of 36 Product</p>
            </div>
          </div>
        </div>
        <div className="product-list">
          <div className="row">
              {products.map(({id,name,image,price}, index)=>{
                return(
                              <div className="col-lg-4 col-sm-6" key={index}>
                              <div className="product-item">
                                <div className="pi-pic">
                                  <img src={require("../../../assets/img/products/product-1.jpg")} alt="" />
                                  <div className="sale pp-sale">Sale</div>
                                  <div className="icon">
                                    <i className="icon_heart_alt" />
                                  </div>
                                  <ul>
                                    <li className="w-icon active"><a href="#"><i className="icon_bag_alt" /></a></li>
                                    <li className="quick-view"><Link to={'/product/'+id}>+ Quick View</Link></li>
                                    <li className="w-icon"><a href="#"><i className="fa fa-random" /></a></li>
                                  </ul>
                                </div>
                                <div className="pi-text">
              <div className="catagory-name">Man</div>
                                  <a href="#">
                                             <h5>{name}</h5>
                                  </a>
                                  <div className="product-price">
                                    {price}
                                    <span>$35.00</span>
                                  </div>
                                </div>
                              </div>
                            </div>)
              })}

          </div>
        </div>

      </div>
    )
}
