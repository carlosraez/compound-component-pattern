import { ProductButtons } from "./productButtons";
import { ProductCard as ProductCardHOC } from "./productCard";
import { ProductImage } from "./productImage";
import { ProductTitle } from "./productTitle";
//export { ProductCard  } from "./productCard";
export { ProductImage } from "./productImage";
export { ProductTitle } from "./productTitle";
export { ProductButtons } from "./productButtons";


export const ProductCard = Object.assign( ProductCardHOC, {
   Title: ProductTitle,
   Image: ProductImage,
   Buttons: ProductButtons,

})

export default ProductCard