import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';

export const UpdateCategory = ({onUpdateCate,categories}) => {
  const {register, handleSubmit, watch, errors }= useForm()
    const history =  useHistory();
    const {id} = useParams();

    const cate = categories.find((categories) => categories.id == id)
      console.log(cate)
      console.log(cate.description)
   const onSubmit = data=>{
    const newData = {
      id: id,
      ...data
  }
  console.log(newData)
 onUpdateCate(newData);
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
                <input type="text" className="form-control" placeholder="Category name" name='name' defaultValue={cate.name}  ref={register({required:true, minLength:6})}/>
                {errors.name && errors.name.type==='required' && (<span className="text-danger mt-3">This field is required</span>)}
                {errors.name && errors.name.type==='minLength' && (<span className="text-danger mt-3">This is field required min length of 6</span>)}
              </div>


              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" ref={register} defaultValue={cate.description} name='description' placeholder="description"  />
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
