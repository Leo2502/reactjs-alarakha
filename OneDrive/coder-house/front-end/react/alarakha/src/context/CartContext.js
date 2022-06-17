import { createContext, useContext, useState } from "react";

export const ContextoCarrito = createContext()

export const useCartContext = () => {
    return useContext(ContextoCarrito)
}

export const CartProvider = ({children}) => {
    const [carrito, setCart] = useState([])

    const agregarAlCarrito = (item) => {
      setCart( [...carrito, item] )
    }
  
    const enCarrito = (id) => {
      return carrito.some((producto) => producto.id === id)
    }
  
    const totalCarrito = () => {
      return carrito.reduce( (total, producto) => total += (producto.precio * producto.cantidad), 0)
    }
  
    const cantidadEnCarrito = () => {
      return carrito.reduce( (total, producto) => total += producto.cantidad, 0 )
    }
  
    const vaciarCarrito = () => {
      setCart( [] )
    }

    const eliminarItem = (id) => {
        setCart( carrito.filter((producto) => producto.id !== id) )
    }

    return (
        <ContextoCarrito.Provider value={ 
            {
                carrito, 
                agregarAlCarrito, 
                enCarrito, 
                totalCarrito,
                cantidadEnCarrito, 
                vaciarCarrito,
                eliminarItem
            } 
        }>
            {children}
        </ContextoCarrito.Provider>
    )
}