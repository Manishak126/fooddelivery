import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems]= useState({})

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){ //Checking whether any product is available in the cart or not
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }

        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo= food_list.find((product)=> product._id===item);
                totalAmount+=itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalQuantity=()=>{
        let totalQuantity=0;
        for(const item in cartItems){
               
        }
        return totalQuantity;
    }

    const contextValue= {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalQuantity
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;