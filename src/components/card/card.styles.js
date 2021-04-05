import styled from 'styled-components'
import { animated } from 'react-spring'

export const StyledContainer = styled.div`
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

    max-width: calc(${props => props.theme.width.viewport}px / ${props => props.size});
    max-height: calc(${props => props.theme.width.viewport}px / ${props => props.size});
    width: calc(${props => props.theme.width.viewport}px / ${props => props.size});
    height: calc(${props => props.theme.width.viewport}px / ${props => props.size});

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

export const StyledCardFront = styled (StyledCard)`
    background: darkgray;
`

export const StyledCardBack = styled (StyledCard)`
    background: lightgray;
`