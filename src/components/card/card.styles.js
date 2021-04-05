import styled from 'styled-components'
import { animated } from 'react-spring'

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
`

export const StyledCard = styled (animated.div)`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    max-width: calc(${props => props.theme.size.viewport}px / ${props => props.size});
    max-height: calc(${props => props.theme.size.viewport}px / ${props => props.size});
    width: calc(${props => props.theme.size.viewport}px / ${props => props.size});
    height: calc(${props => props.theme.size.viewport}px / ${props => props.size});

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

    }
`

export const StyledCardFront = styled (StyledCard)`
    //background: darkgray;
`

export const StyledCardBack = styled (StyledCard)`
    //background: lightgray;
`