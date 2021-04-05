import React from 'react'
import Head from 'next/head'
import CardGridModule from '@/components/card-grid/card-grid.module'
import { FaHeadphones } from 'react-icons/fa'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;

        // background: ${props => props.theme.colors.white};
    //background: transparent;
    // todo create hex to rgb converter
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3));
    border-radius: 1rem;
    box-shadow: inset 0 0 0 1px ${props => props.theme.colors.white};
    backdrop-filter: blur(2rem);
`

const StyledIcon = styled.div`
    color: white;
`

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
                        <StyledIcon><FaHeadphones/></StyledIcon>
                        <div>MemAudio</div>
                    </StyledDiv>
                    <StyledDiv>
                        <StyledIcon><FaHeadphones/></StyledIcon>
                        <div>MemAudio</div>
                    </StyledDiv>
                    <StyledDiv noback="true">
                        <StyledIcon><FaHeadphones/></StyledIcon>
                        <div>MemAudio</div>
                    </StyledDiv>
                    <StyledDiv noback="true">
                        <StyledIcon><FaHeadphones/></StyledIcon>
                        <div>MemAudio</div>
                    </StyledDiv>
                </CardGridModule>
            </>
        </>
    )

}