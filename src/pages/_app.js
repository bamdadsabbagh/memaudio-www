import '@/styles/main.scss'
import React from 'react'
import Layout from '@/components/layout'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'sass-reset'

const GlobalStyle = createGlobalStyle``

const theme = {
    'colors': {
        'background': '#32386D',
        'red': '#FD3359',
        'yellow': '#F4D302',
        'blue': '#21BDFF',
    },
}

export default function MyApp ({ Component, pageProps }) {

    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Layout>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )

}