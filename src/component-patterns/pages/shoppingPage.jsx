import { ProductCard  } from "../components/productCard"

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
         <ProductCard product={product} />
         <ProductCard product={product} />
         <ProductCard product={product} />
         <ProductCard product={product} />
         <ProductCard product={product} />
      </div>
    </div>
  )
}
