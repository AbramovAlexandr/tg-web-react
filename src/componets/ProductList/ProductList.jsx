import React from 'react'
import { ProductItem } from '../../ProductItem/ProductItem'

export const ProductList = () => {
  return (
    <div>
        <ProductItem
            product={item}
            onAdd={onAdd}
            className={'item'}
                />
    </div>
  )
}
