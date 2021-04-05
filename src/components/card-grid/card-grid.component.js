import React from 'react'
import CardComponent from '@/components/card/card.component'
import { StyledContainer, StyledGrid } from '@/components/card-grid/card-grid.styles'

export default function CardGridComponent ({ children }) {

    // const [size, setSize] = useRecoilState (CardGridStateSize)
    // size = setSize (children.length ** 0.5)
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
                            children.map ((child, key) => (
                                // eslint-disable-next-line react/jsx-props-no-spreading,react/no-array-index-key
                                <CardComponent {...child.props} size={size} key={key}>
                                    {child}
                                </CardComponent>
                            ))
                    }
                </StyledGrid>
            </StyledContainer>
        </>
    )

}