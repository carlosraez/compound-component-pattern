import { useState, useEffect, useRef } from 'react'

export const useProduct = ({onChange, product, value = 0}) => {
    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange)

    useEffect(() => {
      setCounter(value)
    }, [value])


    const increaseBy = (value) => {
         
        if (isControlled.current && onChange) {
            return  onChange({count: value, product})
        }
        console.log('is Controlled', isControlled.current);

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
