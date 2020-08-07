import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

export const AddCategory = ({onAddCate}) => {
  const {register, handleSubmit, watch, errors }= useForm()
    const history =  useHistory();
   const onSubmit = data=>{
    const newData = {
      id: Math.random().toString(36).substr(2, 9),
      ...data
  }
 onAddCate(newData);
 history.push('/admin/categories')
}
    return (
        <div>
 <div className="card">
        <h5 className="card-header">Add category</h5>
        <div className="card-body">
          <form acceptCharset="UTF-8" encType="multipart/form-data" id="productForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-sm-8" style={{float: 'left'}}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Product name" name='name'  ref={register({required:true, minLength:6})}/>
                {errors.name && errors.name.type==='required' && (<span className="text-danger mt-3">This field is required</span>)}
                {errors.name && errors.name.type==='minLength' && (<span className="text-danger mt-3">This is field required min length of 2</span>)}
              </div>


              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" ref={register} name='description' placeholder="description" defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-primary">save</button>
            </div>
            {/* <div className="form-group">
                <img id="selectImage" alt="image" src={File} width="300px" height="300px" />
                <input type="file" className="form-control" id="img" name="image" aria-describedby="imagehelp" accept="image/*" ref={register} onChange={(event)=>{return(
                  onChangeImg(event)
                  )}}/>
                <small id="imagehelp" className="form-text text-muted">Photo size is less than 1MB</small>
              </div> */}

          </form>
        </div>
      </div>
        </div>
    )
}
