import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breakculm } from '../components/Breakculm/Breakculm';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breakculm product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}
