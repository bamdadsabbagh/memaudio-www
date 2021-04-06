import React from 'react'
import Head from 'next/head'
import CardGridModule from '@/components/card-grid/card-grid.module'
import { StyledDiv, StyledDivBlue, StyledDivGreen, StyledDivRed, StyledDivWhite } from '@/styles/index.styles'
import { FaHeadphones, FaQuestion } from 'react-icons/fa'
import { FiHeadphones, FiPlay, FiUser } from 'react-icons/fi'

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
                    <StyledDivWhite>
                        <FaHeadphones/>
                    </StyledDivWhite>
                    <StyledDivBlue noback="true">
                        <FiPlay/>
                    </StyledDivBlue>
                    <StyledDiv>
                        <FiHeadphones/>
                    </StyledDiv>
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
                    <StyledDivGreen>
                        <FaQuestion/>
                    </StyledDivGreen>
                </CardGridModule>
            </>
        </>
    )

}