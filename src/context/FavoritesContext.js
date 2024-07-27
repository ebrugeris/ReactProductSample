import { createContext, useState } from "react";



export const FavoritesContext = createContext(null)


export const FavoritesProvider = ({ children }) => {

    const [favorites, setfavorites] = useState([])

    const favOperation = (order) => {
        let favControl = favorites.find(f => f.id === order.id)

        if(favControl){
            let filteredFavorites = favorites.filter(f => f.id !== order.id)
            setfavorites(filteredFavorites)
        }
        else{
            setfavorites([...favorites, order])
        }
    }

    const clearFavorites = () => {
        setfavorites([])
    }


    return <FavoritesContext.Provider value={{favOperation, clearFavorites, favorites}}>{children}
    </FavoritesContext.Provider>


}