
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct'

export const ProductImage = (img) => (
    <img 
      className={styles.productImg} 
       src={ img ? './coffee-mug.png' : noImage } 
       alt="Coffie Mug" />
)

export const ProductTitle = ({title}) =>  (
    <span className={styles.productDescription}>{title}</span> )

export const ProductButtons = ({incresaseBy1, incresaseByMinus1, counter }) => ( 
<div className={styles.buttonsContainer}>
    <button 
    onClick={incresaseByMinus1} 
    className={styles.buttonMinus}> - </button>
    <div className={styles.countLabel}> {counter} </div>
     <button 
      onClick={incresaseBy1} 
      className={styles.buttonAdd}> + </button>
      </div>
) 

export const ProductCard = ({ product }) => {  
  const { img, title } = product
  const { counter, increaseBy } = useProduct()

  return (
    <div className={styles.productCard}>
        <ProductImage img={img} />
        <ProductTitle title={title} />
        
            <ProductButtons  
             incresaseBy1={() => increaseBy(+1)}  
             incresaseByMinus1={() => increaseBy(-1)}
             counter={counter}
             />
    
    </div>
  )
}
