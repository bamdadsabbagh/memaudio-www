import React from 'react'
import { FiPlay } from 'react-icons/fi'
import { StoreMap } from '../store/store-map'
import { AnimationFlip } from '../components/animation-flip'
import { Card } from '../components/card'

export const PageHome = StoreMap (({
    setPageRedirect, setPageTransition,
}) => {

    const trigger = () => {

        setPageTransition (true)

        setTimeout (() => {

            setPageRedirect ('/menu')

        }, 350 * 2.5)

    }

    return (
        <>
            {/* <AnimationFlip */}
            {/*    size={1} */}
            {/*    Front={Front} */}
            {/* /> */}

            <Card>
                <FiPlay/>
            </Card>
        </>
    )

})