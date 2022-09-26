import { useState } from "react"
import { ProductCard, ProductImage, ProductButtons , ProductTitle } from "../components"
import styles from '../styles/styles.module.css'
import '../styles/custom-styles.css'


const product1 = {
  id:'1',
  title:'Coffe Mug - Card',
  img: '../../../public/coffee-mug.png'
}

const product2 = {
  id:'2',
  title:'Coffe Mug - Meme',
  img: '../../../public/coffee-mug2.png'
}

const products = [product1, product2]

export const ShoppingPage = () => {


   const [shoppingCart, setShoppingCart] = useState({})

   const onProductChange = ({count, product}) => {
      setShoppingCart((oldShoppingCart) => {
       
        if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldShoppingCart
            return rest
            
          }
          
        return {
          ...oldShoppingCart,
          [product.id]: {...product, count}
        }
      })
   }
  
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {
          products.map((product, index) => (
          <ProductCard 
          key={product.id} 
          product={product}
          value={shoppingCart[product.id]?.count || 0}
          onChange={(e) => onProductChange(e)} 
          >
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
         </ProductCard>
          ))
        }
        <div className={styles.shoppingcart}>
        {
          Object.entries(shoppingCart).map(([key, product]) => 
              (
              <ProductCard 
              key={key}
              // className="bg-dark" 
              product={product} 
              onChange={onProductChange}
              value={product.count}
              style={{
              width: '100px'
            }} >
                <ProductImage />
                <ProductTitle title={`${product.count}`} />
                <ProductButtons />
             </ProductCard>
             ))
        }
        </div> 
      </div>
    </div>
  )
}


/* medium way  */
        /* <ProductCard product={products} >
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
         </ProductCard> */
         /* easy way  */