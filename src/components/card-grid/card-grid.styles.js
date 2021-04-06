import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${props => props.theme.size.viewport}px;
    height: ${props => props.theme.size.viewport}px;
`

export const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.size}, 1fr);
    grid-template-rows: repeat(${props => props.size}, 1fr);
    width: 100%;
    height: 100%;
    //grid-gap: 0.333rem;
    grid-gap: ${props => props.theme.size.viewport * 0.03}px;
`

