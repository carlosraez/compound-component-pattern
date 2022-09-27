import { ProductCard, ProductImage, ProductButtons , ProductTitle } from "../components"
import styles from '../styles/styles.module.css'
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart"
import { product1, product2 } from "../data/products"

const products = [product1, product2]

export const ShoppingPage = () => {

  const { onProductChange,  shoppingCart }  =  useShoppingCart()
   
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