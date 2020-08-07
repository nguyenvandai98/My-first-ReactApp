import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { firebase } from 'firebase';

export const AddProduct = ({onAddProd}) => {

    const [prod, setProd] = useState({})
    const [File,setFile] = useState();
    const [Image,setImage] = useState(null);
    const {register, handleSubmit, watch, errors }= useForm()
    const history =  useHistory();
   const onSubmit = data=>{
    const newData = {
      id: Math.random().toString(36).substr(2, 9),
      ...data
  }
       onAddProd(newData);
       history.push('/admin/products');
       if(Image !=null){

             const uploadTask = firebase.storage().ref(`images/${Image.name}`).put(Image);
             uploadTask.on(
               "state_changed",
               snapshot =>{},
               error =>{
                 console.log(error);
               },
               ()=>{
                 firebase.storage()
                     .ref("images")
                     .child(Image.name)
                     .getDownloadURL()
                     .then(url =>{
                          console.log(url)
                     })
               }
             )
       }
   }
   const onChangeImg =(event)=>{
       if(event.target.files[0]){
        setFile(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0])
       }
   }

    return (
        <div>
       <div className="card">
        <h5 className="card-header">Add product</h5>
        <div className="card-body">
          <form acceptCharset="UTF-8" encType="multipart/form-data" id="productForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-sm-8" style={{float: 'left'}}>
              <div className="form-group">
                <label>Product name</label>
                <input type="text" className="form-control" placeholder="Product name" name='name'  ref={register({required:true, minLength:6})}/>
                {errors.name && errors.name.type==='required' && (<span className="text-danger mt-3">This field is required</span>)}
                {errors.name && errors.name.type==='minLength' && (<span className="text-danger mt-3">This is field required min length of 2</span>)}
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" ref={register({required:true,min:0,max:9999})} className="form-control" id="quantity" name="quantity" placeholder="Quantity" aria-describedby="amountHelp" />
                {errors.quantity && errors.quantity.type==='required' && (<span className="text-danger mt-3">This field is required</span>)}
                {errors.quantity && errors.quantity.type==='min' && (<span className="text-danger mt-3">Must be a number and be greater than
                  0</span>)}
                  {errors.quantity && errors.quantity.type==='max' && (<span className="text-danger mt-3"> the number is too big</span>)}
              </div>
              <div className="form-group">
                <label>Price($)</label>
                <input type="number" ref={register({required:true,min:0,max:9999})} className="form-control" aria-describedby="emailHelp" placeholder="Price" min={0}  name='price'/>
                {errors.quantity && errors.quantity.type==='required' && (<span className="text-danger mt-3">This field is required</span>)}
                {errors.quantity && errors.quantity.type==='min' && (<span className="text-danger mt-3">Must be a number and be greater than
                  0</span>)}
                  {errors.quantity && errors.quantity.type==='max' && (<span className="text-danger mt-3"> the number is too big</span>)}
              </div>
              <div className="form-group">
                <label>Sale(%)</label>
                <input type="text" ref={register({required:true,min:0,max:100})}  className="form-control" aria-describedby="emailHelp" placeholder="sale" min={0}  name='sale' />
                {errors.quantity && errors.quantity.type==='required' && (<span className="text-danger mt-3">This field is required</span>)}
                {errors.quantity && errors.quantity.type==='min' && (<span className="text-danger mt-3">Must be a number and be greater than
                  0</span>)}
                  {errors.quantity && errors.quantity.type==='max' && (<span className="text-danger mt-3"> the number is too big</span>)}
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select className="form-control" name="status" ref={register} id="status" >
                  <option value={true} >In Stock</option>
                  <option value={false}>Out Stock</option>
                </select>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" ref={register} name='description' placeholder="description" defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-primary">save</button>
            </div>
            <div className="col-sm-4" style={{float: 'left', margin: '0 auto'}}>
              <div className="form-group">
                <img id="selectImage" alt="image" src={File} width="300px" height="300px" />
                <input type="file" className="form-control" id="img" name="image" aria-describedby="imagehelp" accept="image/*" ref={register} onChange={(event)=>{return(
                  onChangeImg(event)
                  )}}/>
                <small id="imagehelp" className="form-text text-muted">Photo size is less than 1MB</small>
              </div>
              {/* <div className="form-group">
                <img id="selectImage1" alt="image" width="150px" height="150px" />
                <input type="file" className="form-control" id="img1" name="img1" aria-describedby="imagehelp1" accept="image/*" onChange="document.getElementById('selectImage1').src = window.URL.createObjectURL(this.files[0])" />
                <small id="imagehelp1" className="form-text text-muted">Photo size is less than 1MB</small>
              </div>
              <div className="form-group">
                <img id="selectImage2" alt="image" width="150px" height="150px" />
                <input type="file" className="form-control" id="img2" name="img2" aria-describedby="imagehelp2" accept="image/*" onChange="document.getElementById('selectImage2').src = window.URL.createObjectURL(this.files[0])" />
                <small id="imagehelp2" className="form-text text-muted">Photo size is less than 1MB</small>
              </div> */}
            </div>
          </form>
        </div>
      </div>
        </div>
    )
}
