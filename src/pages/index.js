import React from 'react'
import Head from 'next/head'
import CardGridModule from '@/components/card-grid/card-grid.module'

export default function PageIndex () {

    return (
        <>
            <Head>
                <title>
                    PageIndex
                </title>
            </Head>
            <>
                <CardGridModule>
                    <div noback="true">1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>4</div>
                    <div>4</div>
                    <div>4</div>
                </CardGridModule>
            </>
        </>
    )

}