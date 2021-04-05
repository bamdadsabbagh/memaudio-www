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
                    <div noBack>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>4</div>
                    <div>4</div>
                    <div>4</div>
                </CardGrid>
            </>
        </>
    )

}