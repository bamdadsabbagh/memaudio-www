import React from 'react'
import CardComponent from '@/components/card/card.component'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 450px;
    height: 450px;
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.size}, 1fr);
    grid-template-rows: repeat(${props => props.size}, 1fr);
    width: 100%;
    height: 100%;
    grid-gap: 0.333rem;
`

/**
 * grid containing cards in a square fashion
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
export default function CardGrid ({ children }) {

    let size = children.length ** 0.5

    // if is not a perfect square, round it up to the next
    if (size % 1 !== 0) size = parseInt (size.toFixed (), 10) + 1

    if (Number.isNaN (size)) size = 1

    return (
        <>
            <StyledContainer>
                <StyledGrid size={size}>
                    {
                        size === 1
                            ?
                            // eslint-disable-next-line react/jsx-props-no-spreading
                                <CardComponent {...children.props} size={size}>
                                    {children}
                                </CardComponent>
                            :
                            children.map (child => (
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                <CardComponent {...child.props} size={size}>
                                    {child}
                                </CardComponent>
                            ))
                    }
                </StyledGrid>
            </StyledContainer>
        </>
    )

}