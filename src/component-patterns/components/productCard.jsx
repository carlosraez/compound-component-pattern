import { createContext } from 'react'
import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct'


 export const productContext = createContext({})
const { Provider } = productContext

export const ProductCard = ({ children ,product }) => {  
  const { counter, increaseBy } = useProduct()

  return (
  <Provider value={{
    counter,
    increaseBy,
    product,
  }}>
    <div className={styles.productCard}>
        { children }
        {/* <ProductImage img={img} />
        <ProductTitle title={title} />
            <ProductButtons  
             incresaseBy={increaseBy}  
             counter={counter}
             /> */}
     </div>
    </Provider>
  )
}
