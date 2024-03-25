import { useRef } from "react";

const useDebounce = (fn, delay) => {
    const refTimer = useRef()

    return function(...args) {
        if(refTimer.current) {
            clearTimeout(refTimer.current)
        }
        refTimer.current = setTimeout(() => {
            fn(...args)
            refTimer.current = null
        }, delay)
    }
}

export default useDebounce