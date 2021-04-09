import styled from 'styled-components'

export const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right top, #65dfc9, #6cdbeb);
    width: 100%;
    height: 100%;
    z-index: -100;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledCircle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3));
    margin-bottom: ${props => props.theme.size.viewport}px;
    margin-right: ${props => props.theme.size.viewport / Math.sqrt (4)}px;
`