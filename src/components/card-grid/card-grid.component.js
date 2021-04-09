import React from 'react'
import CardComponent from '@/components/card/card.component'
import { StyledContainer, StyledGrid } from '@/components/card-grid/card-grid.styles'
import { useSize } from '@/hooks/use-size'

export default function CardGridComponent ({ children }) {

    const size = useSize (children.length)

    if (size === null) return <>Loading...</>

    return (
        <>
            <StyledContainer>
                <StyledGrid size={size}>
                    {
                        size === 1
                            ?
                                <CardComponent {...children.props} size={size}>
                                    {children}
                                </CardComponent>
                            :
                            children.map ((child, index) => (
                                <CardComponent {...child.props} size={size} key={index}>
                                    {child}
                                </CardComponent>
                            ))
                    }
                </StyledGrid>
            </StyledContainer>
        </>
    )

}