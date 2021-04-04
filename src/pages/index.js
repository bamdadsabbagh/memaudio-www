import React from 'react'
import Head from 'next/head'
import CardGrid from '@/components/card-grid'
import Card from '@/components/card'

export default function PageIndex () {

    return (
        <>
            <Head>
                <title>
                    PageIndex
                </title>
            </Head>
            <>
                <CardGrid width={2} height={2}>
                    <Card>1</Card>
                    <Card>2</Card>
                    <Card>3</Card>
                    <Card>4</Card>
                </CardGrid>
            </>
        </>
    )

}