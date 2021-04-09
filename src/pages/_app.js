import React from 'react'
import LayoutComponent from '@/components/layout/layout.component'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'sass-reset'
import { RecoilRoot } from 'recoil'
import { StyledTheme } from '../config/styled-theme'

const GlobalStyle = createGlobalStyle``

export default function MyApp ({ Component, pageProps }) {

    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={StyledTheme}>
                <LayoutComponent>
                    <RecoilRoot>
                        <Component {...pageProps} />
                    </RecoilRoot>
                </LayoutComponent>
            </ThemeProvider>
        </>
    )

}