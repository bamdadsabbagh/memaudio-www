import '@/styles/main.scss'
import React from 'react'
import Layout from '@/components/layout'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'sass-reset'
import { StyledTheme } from '../config/styled-theme'

const GlobalStyle = createGlobalStyle``

export default function MyApp ({ Component, pageProps }) {

    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={StyledTheme}>
                <Layout>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )

}