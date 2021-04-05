import React from 'react'
import { StyledContainer } from '@/components/layout-main/layout-main.styles'

export default function LayoutMainComponent ({ children }) {

    return (
        <>
            <StyledContainer>
                {children}
            </StyledContainer>
        </>
    )

}