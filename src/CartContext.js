import React, {useState} from 'react';
//brings in react and the useState hook

export const CartContext = React.createContext();
//naming our context or "DATA LAYER"


// this is the provider of the cart state
export const CartProvider = (props) => {

    const [cart, setCart] = useState([]);
//uses useState to set cart inside of it
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}



