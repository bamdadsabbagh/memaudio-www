import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`

const StyledCard = styled (animated.div)`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    max-width: calc(450px / 2);
    max-height: calc(450px / 2);
    width: calc(450px / 2);
    height: calc(450px / 2);

    cursor: pointer;
    //will-change: transform, opacity;

    box-shadow: inset 0 0 0 1px #32386D;
`

const StyledCardFront = styled (StyledCard)`
    background: red;
`

const StyledCardBack = styled (StyledCard)`
    background: blue;
`

export default function Card ({ children }) {

    const [flipped, setFlipped] = useState (false)

    console.log (flipped)

    // const { transform, opacity } = useSpring ({
    //     'opacity': flipped ? 1 : 0,
    //     'transform': `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    //     'config': { 'mass': 10, 'tension': 500, 'friction': 80 },
    // })

    const { opacity, transform } = useSpring ({
        'opacity': flipped ? 1 : 0,
        'transform': `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        'config': { 'mass': 10, 'tension': 500, 'friction': 80 },
    })

    return (
        <StyledContainer
            onClick={() => setFlipped (flipped => !flipped)}
        >
            <StyledCardFront
                style={{ 'opacity': opacity.interpolate (o => 1 - o), transform }}
            >
                {children}
            </StyledCardFront>
            <StyledCardBack
                style={{ opacity, 'transform': transform.interpolate (t => `${t} rotateY(180deg)`) }}
            >
                {children}
            </StyledCardBack>
        </StyledContainer>
    )

}