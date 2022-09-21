import { ProductCard, ProductImage, ProductButtons , ProductTitle } from "../components"

const product = {
  id:'1',
  title:'Coffe Mug - Card',
  img: '../../../public/coffee-mug.png'
}

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
         {/* medium way  */}
        <ProductCard product={product} >
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
         </ProductCard>
         {/* easy way  */}
         <ProductCard product={product} >
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
         </ProductCard>
      </div>
    </div>
  )
}
