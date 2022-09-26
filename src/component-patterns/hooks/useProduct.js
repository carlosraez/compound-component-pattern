import { useState, useEffect } from 'react'

export const useProduct = ({onChange, product, value = 0}) => {
    const [counter, setCounter] = useState(value)
    useEffect(() => {
      setCounter(value)
    }, [value])


    const increaseBy = (value) => {
        const newValue =  Math.max(counter + value, 0)
        setCounter(prev => Math.max(prev + value, 0))

        onChange && onChange({
            count: newValue,
            product: product
        })
    }
  
    return  {
        counter,
        increaseBy
    }
}
