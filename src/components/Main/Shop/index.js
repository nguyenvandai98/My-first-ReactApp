import React from 'react'

import { Filter } from './Filter'
import { ListProduct } from './ListProduct'

export const Shop = ({products}) => {
    console.log(products)
    return (
          <div className='product-shop spad'>
              <div className ='container'>
                  <div className='row'>
                      <Filter />
                      <ListProduct  products={products}/>
                  </div>
              </div>
          </div>
    )
}
