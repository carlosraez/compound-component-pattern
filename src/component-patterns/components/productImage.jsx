import { useContext } from 'react'
import noImage from '../assets/no-image.jpg'
import { productContext } from './productCard'
import styles from '../styles/styles.module.css'

export const ProductImage = () => {
    const { product  } = useContext(productContext)

    return (
        <img 
        className={styles.productImg} 
         src={ product.img  !== '' ? './coffee-mug.png' : noImage } 
         alt="Coffie Mug" />
    )
} 