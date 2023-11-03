import React from 'react'
import './Offer.css'
import exclusive_image from '../Assets/exclusive_image.png'
export const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offer for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
           <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
