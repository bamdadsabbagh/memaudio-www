import { useEffect, useState } from 'react'

export function useSize (length) {

    const [size, setSize] = useState (null)

    useEffect (() => {

        let newSize = length ** 0.5

        // if size is not an integer, round it up to next integer
        // in order to have a perfect square
        if (newSize % 1 !== 0) newSize = parseInt (newSize.toFixed (), 10) + 1

        if (Number.isNaN (newSize)) newSize = 1

        setSize (newSize)

    }, [length])

    if (size === null) return null

    return size

}
