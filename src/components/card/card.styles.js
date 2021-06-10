import styled from 'styled-components'
import { animated } from 'react-spring'

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    //background: blue;
    min-width: 100%;
`

export const StyledCard = styled (animated.div)`
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    //background: red;
    //min-width: 100%;
    //min-height: 100%;

    width: calc(${props => props.theme.size.viewport}px / ${props => props.size * 2});
    height: calc(${props => props.theme.size.viewport}px / ${props => props.size * 2});
    //width: 100%;
    //height: 100%;
`

export const StyledCardFront = styled (StyledCard)`
    //background: darkgray;
`

export const StyledCardBack = styled (StyledCard)`
    //background: lightgray;
`