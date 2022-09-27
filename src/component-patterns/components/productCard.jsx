import { createContext } from 'react'
import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct'


 export const productContext = createContext({})
const { Provider } = productContext

export const ProductCard = ({ children ,product, style, className, onChange, value, initialValues }) => {  
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ 
    onChange, 
    product,
    value,
    initialValues,
    
  })

  return (
  <Provider value={{
    counter,
    increaseBy,
    product,
    maxCount,
  }}>
    <div 
    style={ style }
    className={`${styles.productCard} ${className}`}>
        { children({
          count: counter,
          isMaxCountReached: isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset: reset
        }) }
     </div>
    </Provider>
  )
}
