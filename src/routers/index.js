import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutMain from "../pages/layouts/LayoutMain";
import LayoutAdmin from "../pages/layouts/LayoutAdmin";
//Admin
import Dashboard from "../pages/views/Admin/Dashboard";
import ProductsManager from "../pages/views/Admin/Products";

//Views
import About from "../pages/views/Main/About";
import Home from "../pages/views/Main/Home";
import { AddProduct } from "../components/Admin/Product/AddProduct";
import { Shop } from "../components/Main/Shop/index";
import { Login } from "../components/Main/Login";
import { Cart } from "../components/Main/Card";
import { DetailProduct } from "../components/Admin/Product/DetailProduct";
import { CheckOut } from "../components/Main/Check-out";
import { SingleProduct } from "../components/Main/Single-product";
import { Blog } from "../components/Main/Blog";
import { BlogDetail } from "../components/Main/Blog-detail";

const Routers = ({ products, onRemove, onAdd, onUpdate }) => {
  const onHandleRemove = (id) => {
    onRemove(id);
  };
  const HandleAdd = (product) => {
    onAdd(product);
  };
  const onHandleUpdate = (product) =>{
         onUpdate(product)
  }
  return (
    <Router>
      <Switch>
          {/* admin */}
        <Route path="/admin/:path?" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin" exact>
                <Dashboard />
              </Route>
              <Route path="/admin/products">
                <ProductsManager
                  products={products}
                  onRemove={onHandleRemove}
                />
              </Route>
              <Route path="/admin/categories">

              </Route>
            </Switch>
          </LayoutAdmin>
        </Route>

        <Route path="/admin/product/:path?" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin/product/add">
                <AddProduct onAdd={HandleAdd} />
              </Route>
              <Route path="/admin/product/:id">
                <DetailProduct products={products} updateProduct={onHandleUpdate} />
              </Route>
            </Switch>
          </LayoutAdmin>
        </Route>
         <Route path ="/admin/category/:path?" exact>
           <LayoutAdmin>
             <Switch>
               <Route path="/admin/category/add">
                     
               </Route>
             </Switch>
           </LayoutAdmin>
         </Route>
        {/* User */}
        <Route>
          <LayoutMain>
            <Switch>
              <Route path="/" exact>
                <Shop products={products} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/cart">
                <Cart></Cart>
              </Route>
              <Route path="/checkout">
                <CheckOut />
              </Route>
              <Route path="/product/:id">
                <SingleProduct products={products} />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/blogDetail">
                <BlogDetail />
              </Route>
            </Switch>
          </LayoutMain>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
