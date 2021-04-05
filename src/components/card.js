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

    max-width: calc(450px / ${props => props.size});
    max-height: calc(450px / ${props => props.size});
    width: calc(450px / ${props => props.size});
    height: calc(450px / ${props => props.size});

    box-shadow: inset 0 0 0 1px ${props => props.theme.colors.background};

    cursor: pointer;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;
    }
`

const StyledCardFront = styled (StyledCard)`
    background: red;
`

const StyledCardBack = styled (StyledCard)`
    background: blue;
`

export default function Card ({ size, children }) {

    const [flipped, setFlipped] = useState (false)

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
                size={size}
                style={{ 'opacity': opacity.interpolate (o => 1 - o), transform }}
            >
                {children}
            </StyledCardFront>
            <StyledCardBack
                size={size}
                style={{ opacity, 'transform': transform.interpolate (t => `${t} rotateY(180deg)`) }}
            >
                {children}
            </StyledCardBack>
        </StyledContainer>
    )

}