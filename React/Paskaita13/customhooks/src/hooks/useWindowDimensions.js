import { useState, useEffect } from 'react'

export function useWindowDimensions() {
    const [dimensions, setDimensions] = useState({})

    useEffect(() => {
        window.addEventListener("resize", () => {
            setDimensions({
              width: window.innerWidth,
              height: window.innerHeight
            })

        })

    
      
    }, [window.innerHeight, window.innerWidth])
    

    return dimensions
}