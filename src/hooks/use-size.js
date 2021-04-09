import { useState } from 'react'

export function useSize (length) {

    const [size] = useState (() => {

        let size = length ** 0.5

        if (size % 1 !== 0) size = parseInt (size.toFixed (), 10) + 1

        if (Number.isNaN (size)) size = 1

        return size

    })

    // console.log ('useSize %i', size)

    return size

}
