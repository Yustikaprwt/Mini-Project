import { createContext, useState, useContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    
    if(context === undefined){
        throw new Error('Appcontext must be within appContextProvider!')
    }

    return context;
}

const AppContextProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (data) => {
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.concat(data);
        setFavorites(newFavorites);

    }

    const removeFromFavorites = (id) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((data)=>data.id !== id);
        setFavorites(newFavorites);
    }

    const [cart, setCart] = useState([]);

    const addToCart = (data) => {
        const oldCart = [...cart];

        const newCart = oldCart.concat(data);
        setCart(newCart);
    }

    const removeFromCart = (id) => {
        const oldCart = [...cart];
        const newCart = oldCart.filter((data)=>data.id !== id);
        setCart(newCart);
    }

    return(
        <AppContext.Provider value={{favorites,cart,addToFavorites,removeFromFavorites,addToCart,removeFromCart}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;