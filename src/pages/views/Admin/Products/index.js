import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProductsManager = ({ products, onRemove }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }
    return (
        <div>
          <main>
        <div className="container-fluid">
          <h1 className="mt-4">Product</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Product</li>
          </ol>

          <div className="card"></div>
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-table mr-1" />
              Product List
            </div>
            <div className="card-body">
              <div className="table-responsive">
                {/* table product */}

                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing={0}
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>image</th>
                      <th>price</th>
                      <th>status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>#</th>
                      <th>name</th>
                      <th>image</th>
                      <th>price</th>
                      <th>status</th>
                      <th></th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {products.map(({ id, name, image, price,status }, index) => {
                      return (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>
                     {name}
                          </td>
                          <td>
                            <img src={image} width="100px" height="100px"></img>
                          </td>
                          <td>{price}$</td>
                          <td>{status ? 'in Stock':'out Stock'}</td>
                          <td>
                            <div>
                            <Link to={'/admin/product/'+ id }
                                className="btn btn-primary">
                                Edit
                              </Link>
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-toggle="modal"
                                data-target={"#modal" + id}
                              >
                                Remove
                              </button>
                              {/* Modal */}
                              <div
                                className="modal fade"
                                id={"modal" + id}
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        Modal title
                                      </h5>
                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">×</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      are you sure ???
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => removeHandle(id)}
                                        data-dismiss="modal"
                                      >
                                        Yes
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
