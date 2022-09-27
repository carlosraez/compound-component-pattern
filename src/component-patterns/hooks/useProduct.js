import { useState, useEffect } from 'react'

export const useProduct = ({onChange, product, value = 0, initialValues}) => {
const [counter, setCounter] = useState(initialValues?.count || value)
     
   
    
    useEffect(() => {
     if (initialValues?.count || value) return
      setCounter(value)
    }, [value, initialValues?.count])

    const increaseBy = (value) => {
        
        let newValue =   Math.max(counter + value, 0)
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues?.maxCount)
        }

        setCounter(newValue)
                 
        onChange && onChange({
            count: newValue,
            product: product
        })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }
  
    return  {
        counter,
        increaseBy,
        reset,
        isMaxCountReached: !! initialValues?.count && initialValues?.maxCount === counter,
        maxCount: initialValues?.maxCount
    }
}
