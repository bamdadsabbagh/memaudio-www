import React from 'react'
import LayoutBackgroundComponent from '@/components/layout-background/layout-background.component'
import LayoutMainComponent from '@/components/layout-main/layout-main.component'
import { StyledContainer } from '@/components/layout/layout.styles'

export default function LayoutComponent ({ children }) {

    return (
        <>
            <StyledContainer>
                <LayoutBackgroundComponent/>
                <LayoutMainComponent>
                    {children}
                </LayoutMainComponent>
            </StyledContainer>
        </>
    )

}