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
import { Category } from "../pages/views/Admin/Category";
import { AddCategory } from "../components/Admin/Category/AddCategory";
import { UpdateCategory } from "../components/Admin/Category/UpdateCategory";

const Routers = ({ products,categories,
                   onRemoveProd, onAddProd, onUpdateProd,
                   onRemoveCate, onAddCate, onUpdateCate }) => {
  const onHandleRemoveProd = (id) => {
    onRemoveProd(id);
  };
  const onHandleAddProd = (product) => {
    onAddProd(product);
  };
  const onHandleUpdateProd = (product) =>{
         onUpdateProd(product)
  }
  const onHandleRemoveCate =(id)=>{
   onRemoveCate(id)
  }
  const onHandleAddCate =(id)=>{
    onAddCate(id)
   }
   const onHandleUpdateCate=(category) =>{
     onUpdateCate(category)
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
                  onRemoveProd={onHandleRemoveProd}
                />
              </Route>
              <Route path="/admin/categories">
                   <Category categories={categories} onRemoveCate={onHandleRemoveCate}/>
              </Route>
            </Switch>
          </LayoutAdmin>
        </Route>

        <Route path="/admin/product/:path?" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin/product/add">
                <AddProduct onAddProd={onHandleAddProd} />
              </Route>
              <Route path="/admin/product/:id">
                <DetailProduct products={products} updateProduct={onHandleUpdateProd} />
              </Route>
            </Switch>
          </LayoutAdmin>
        </Route>
         <Route path ="/admin/category/:path?" exact>
           <LayoutAdmin>
             <Switch>
               <Route path="/admin/category/add">
               <AddCategory onAddCate={onHandleAddCate}/>
               </Route>
               <Route path="/admin/category/:id">
               <UpdateCategory categories={categories} onUpdateCate={onHandleUpdateCate}/>
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
