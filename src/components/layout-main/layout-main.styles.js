import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background: ${props => props.theme.colors.blue};
`