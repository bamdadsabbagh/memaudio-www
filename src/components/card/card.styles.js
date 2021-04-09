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
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    width: calc(${props => props.theme.size.viewport}px / ${props => props.size * 2});
    height: calc(${props => props.theme.size.viewport}px / ${props => props.size * 2});
`

export const StyledCardFront = styled (StyledCard)`
    //background: darkgray;
`

export const StyledCardBack = styled (StyledCard)`
    //background: lightgray;
`