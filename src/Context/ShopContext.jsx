import React, { createContext, useState } from 'react'
import all_product from '../components/Assets/all_product'
export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;

        
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart())
   
    console.log(cartItems);

    const addToCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId]+1}))
        console.log("Cart:",cartItems);
    }
    const removeCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId]-1}))
    }
    const getTotalProduct = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item] 
                console.log("ok ");
            }
        }
        return totalAmount

    }
    const getTotalItem = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem+= cartItems[item]
            }
        }
        return totalItem;
    }
    const contextValue = {getTotalItem,getTotalProduct,all_product, cartItems, addToCart,removeCart}
    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
