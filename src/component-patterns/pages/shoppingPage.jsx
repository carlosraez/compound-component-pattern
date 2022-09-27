import { ProductCard, ProductImage, ProductButtons , ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { product1 } from "../data/products"

export const ShoppingPage = () => {
   
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
          <ProductCard  
          product={product1}
          initialValues={{
            count: 4,
            maxCount: 10
          }}
          >
          {
            ({reset, increaseBy, count, isMaxCountReached}) => (
              <>
                 <ProductImage />
                 <ProductTitle />
                 <ProductButtons />
                 <button onClick={() => increaseBy(-2)}>-2</button>
                 <button onClick={reset}>Reset</button>
                 {
                   !isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>
                 }
                
                 <span>{count}</span>
              </>
            )
          }
         </ProductCard>
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