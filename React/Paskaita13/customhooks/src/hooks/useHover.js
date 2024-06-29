import { useState, useEffect, useRef } from 'react'

export function useHover() {
    const elementRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true); 
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
        
    }

    useEffect(() => {
        const node = elementRef.current;

        if (node) {
            node.addEventListener('mouseenter', handleMouseOver);
            node.addEventListener('mouseleave', handleMouseLeave)

            return() => {
                node.removeEventListener('mouseenter', handleMouseOver);
                node.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])
    return [elementRef, isHovered]
}

export default useHover