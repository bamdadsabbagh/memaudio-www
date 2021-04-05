import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

export default function Card ({ size, children }) {

    const [flipped, setFlipped] = useState (false)

    console.log (children.props)

    const { opacity, transform } = useSpring ({
        'opacity': flipped ? 1 : 0,
        'transform': `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
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
            {
                children.props.noBack
                ??
                <StyledCardBack
                    size={size}
                    style={{ opacity, 'transform': transform.interpolate (t => `${t} rotateY(180deg)`) }}
                >
                    {children}
                </StyledCardBack>
            }
        </StyledContainer>
    )

}

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`

export const StyledCard = styled (animated.div)`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    max-width: calc(450px / ${props => props.size});
    max-height: calc(450px / ${props => props.size});
    width: calc(450px / ${props => props.size});
    height: calc(450px / ${props => props.size});

    box-shadow: inset 0 0 0 1px ${props => props.theme.colors.background};

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        cursor: pointer;
    }
`

const StyledCardFront = styled (StyledCard)`
    background: darkgray;
`

const StyledCardBack = styled (StyledCard)`
    background: lightgray;
`