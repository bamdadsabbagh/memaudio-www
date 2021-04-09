import React from 'react'
import Head from 'next/head'
import CardGridComponent from '@/components/card-grid/card-grid.component'
import { FaHeadphones, FaQuestion } from 'react-icons/fa'
import { FiPlay, FiUser } from 'react-icons/fi'
import { StyledDivBlue, StyledDivGreen, StyledDivRed, StyledDivWhite } from '@/pages-styles/index.styles'
import Link from 'next/link'

export default function PageIndex () {

    return (
        <>
            <Head>
                <title>
                    PageIndex
                </title>
            </Head>
            <>
                <CardGridComponent>
                    <Link href="/">
                        <StyledDivWhite>
                            <FaHeadphones/>
                        </StyledDivWhite>
                    </Link>
                    <StyledDivBlue noback="true">
                        <FiPlay/>
                    </StyledDivBlue>
                    <StyledDivRed>
                        <FiUser/>
                    </StyledDivRed>
                    <StyledDivGreen>
                        <FaQuestion/>
                    </StyledDivGreen>
                    <StyledDivGreen>
                        <FaQuestion/>
                    </StyledDivGreen>
                    <StyledDivGreen>
                        <FaQuestion/>
                    </StyledDivGreen>
                    <StyledDivGreen>
                        <FaQuestion/>
                    </StyledDivGreen>
                    <StyledDivGreen>
                        <FaQuestion/>
                    </StyledDivGreen>
                    <StyledDivGreen>
                        <FaQuestion/>
                    </StyledDivGreen>
                    <StyledDivGreen>
                        <FaQuestion/>
                    </StyledDivGreen>
                </CardGridComponent>
            </>
        </>
    )

}