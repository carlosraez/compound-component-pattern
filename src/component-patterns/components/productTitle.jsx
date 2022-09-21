import { useContext } from 'react'
import { productContext } from './productCard'
import styles from '../styles/styles.module.css'

export const ProductTitle = (title) => {
    const { product  } = useContext(productContext)
    return (<span className={styles.productDescription}>{product.title ? product.title : title}</span> )
}