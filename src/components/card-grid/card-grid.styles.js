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
    height: 50%;
    width: 50%;
    //height: 60%;
    //width: 60%;

    background: transparent;
    //background: red;
    //grid-gap: 0.333rem;
        // grid-gap: ${props => props.theme.size.viewport * 0.03}px;
        //grid-gap: ${props => props.theme.size.viewport * 0.2}px;
`

