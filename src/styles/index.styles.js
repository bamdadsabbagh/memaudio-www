import styled from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    font-size: 2rem;

    color: ${props => props.theme.colors.white};

    border-radius: 1rem;
    box-shadow: inset 0 0 0 1px ${props => props.theme.colors.white};
    backdrop-filter: blur(2rem);
`

export const StyledDivWhite = styled (StyledDiv)`
    // todo create hex to rgb converter
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, 0.667),
    rgba(255, 255, 255, 0.333));
`

export const StyledDivRed = styled (StyledDiv)`
    // todo create hex to rgb converter
    background: linear-gradient(to right bottom,
    rgba(255, 0, 0, 0.667),
    rgba(255, 0, 0, 0.333));
`

export const StyledDivGreen = styled (StyledDiv)`
    // todo create hex to rgb converter
    background: linear-gradient(to right bottom,
    rgba(0, 255, 0, 0.667),
    rgba(0, 255, 0, 0.333));
`

export const StyledDivBlue = styled (StyledDiv)`
    // todo create hex to rgb converter
    background: linear-gradient(to right bottom,
    rgba(0, 0, 255, 0.667),
    rgba(0, 0, 255, 0.333));
`