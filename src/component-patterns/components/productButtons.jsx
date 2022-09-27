import { useContext, useCallback } from 'react'
import { productContext } from './productCard'
import styles from '../styles/styles.module.css'

export const ProductButtons = () => { 
    const { increaseBy , counter, maxCount  } = useContext(productContext);
    
   const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount]
    )
    
 
    return (
<div className={styles.buttonsContainer}>
    <button 
    onClick={() => increaseBy(-1)} 
    className={styles.buttonMinus}> - </button>
    <div className={styles.countLabel}> {counter} </div>
     <button 
      onClick={() => increaseBy(+1)} 
      className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}> + </button>
    </div>
) }