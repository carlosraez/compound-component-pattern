import { useState  } from 'react'

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState({})

    const onProductChange = ({count, product}) => {
        setShoppingCart((oldShoppingCart) => {
          const productInCart = oldShoppingCart[product.id] || {...product, count: 0 }
  
          if (Math.max(productInCart.count + count, 0) > 0) {
             productInCart.count += count;
             return {
               ...oldShoppingCart,
               [product.id]: productInCart
             }
          }
  
          //Delete Product 
          const { [product.id]: toDelete, ...rest } = oldShoppingCart
          return rest
         
          // if (count === 0) {
          //     const { [product.id]: toDelete, ...rest } = oldShoppingCart
          //     return rest
              
          //   }
            
          // return {
          //   ...oldShoppingCart,
          //   [product.id]: {...product, count}
          // }
        })
     }

     return {
        onProductChange,
        shoppingCart,
     }
}