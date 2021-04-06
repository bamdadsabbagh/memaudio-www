import React from 'react'
import Head from 'next/head'
import CardGridModule from '@/components/card-grid/card-grid.module'
import { FaHeadphones } from 'react-icons/fa'
import { StyledDiv, StyledIcon } from '@/styles/index.styles'

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
                    <StyledDiv noback="true">
                        <StyledIcon>
                            <FaHeadphones/>
                        </StyledIcon>
                        <div>memaudio</div>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledIcon><FaHeadphones/></StyledIcon>
                        <div>MemAudio</div>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledIcon><FaHeadphones/></StyledIcon>
                        <div>MemAudio</div>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledIcon><FaHeadphones/></StyledIcon>
                        <div>MemAudio</div>
                    </StyledDiv>
                </CardGridModule>
            </>
        </>
    )

}