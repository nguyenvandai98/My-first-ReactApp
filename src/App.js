import React, { useState ,useEffect} from 'react';
import Routers from './routers'
import apiRequest from './api/productAPI';
import apiRequestCate from './api/categoryAPI';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const history =  useHistory();
  useEffect(() => {
    async function getProducts(){
      try {
        const {data} = await apiRequest.getAll();
        console.log(data)
        setProducts(data);
        console.log(data)
      } catch (error) {
        console.log('failed to request API: ',error)
      }
    }
    async function getCategories(){
      try {
        const {data} = await apiRequestCate.getAll();

        setCategories(data);

      } catch (error) {
        console.log('failed to request API: ',error)
      }
    }
    getCategories();
    getProducts();
  }, [])
  const onHandleRemoveProd = async (id) => {
    try {

      const data = await apiRequest.remove(id);
     console.log(data)
      const newProducts = products.filter(product => product.id !== id);
      console.log(newProducts, "new data")
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  const onHandleAddProd = async  (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleUpdateProd = (updateProduct) => {
    const newProducts = products.map(product => (
      product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts);
  }

  const onHandleRemoveCate = async (id)=>{
    try {
      const {data} = await apiRequestCate.remove(id);
      const newCategories = categories.filter(category => category.id !== id);
      setCategories(newCategories);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  const onHandleAddCate = async  (category) => {
    try {
      const { data } = await apiRequestCate.create(category);
      setCategories([
        ...categories,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  const onHandleUpdateCate = async  (updateCategory) => {
    console.log(updateCategory,"catea app")
    const newCategories = categories.map(category => (
      category.id === updateCategory.id ? updateCategory : category  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    const {data} = await apiRequestCate.update(updateCategory.id,updateCategory)
    setCategories(newCategories);
  }

  return (
    <div className="App">
      <Routers products={products} categories={categories}
       onRemoveProd={onHandleRemoveProd} onAddProd={onHandleAddProd} onUpdateProd={onHandleUpdateProd}
       onRemoveCate = {onHandleRemoveCate} onAddCate={onHandleAddCate} onUpdateCate={onHandleUpdateCate}
       />

    </div>
  )

}
export default App;