import styled from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;

    // todo create hex to rgb converter
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3));
    
    border-radius: 1rem;
    box-shadow: inset 0 0 0 1px ${props => props.theme.colors.white};
    backdrop-filter: blur(2rem);
`

export const StyledIcon = styled.div`
    color: white;
`

