import React from 'react'
import Head from 'next/head'
import CardGrid from '@/components/card-grid'

export default function PageIndex () {

    return (
        <>
            <Head>
                <title>
                    PageIndex
                </title>
            </Head>
            <>
                <CardGrid>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </CardGrid>
            </>
        </>
    )

}