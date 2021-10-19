import { createContext, useEffect, useState } from "react";
import { deleteCartItemsReq, getCartItemsReq, postCartItem } from "../API/Api";

export const FoodContext = createContext();

export const FoodContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const getCartItems = () => {
        getCartItemsReq()
        .then (res => {
            setCart(res.data);
        })
    }

    const handleCart = (item) => {
        postCartItem(item)
        .then (res => {
            const payload = [
                ...cart,
                res.data
            ]
            setCart(payload);
        })
    }

    const handleDelete = (id) => {
        const payload = cart.filter(item => item.id !== id);
        deleteCartItemsReq(id)
        .then (res => {
            setCart(payload);
        })
    }

    useEffect (()=>{
        getCartItems();
    }, [])

    const value = {
        cart,
        handleCart,
        handleDelete
    }

    return (
        <div>
            <FoodContext.Provider value={value}>
                {children}
            </FoodContext.Provider>
        </div>
    )

}