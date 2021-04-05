import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import { StyledContainer, StyledCardFront, StyledCardBack } from '@/components/card/card.styles'

export default function CardComponent ({ size, children }) {

    const [flipped, setFlipped] = useState (false)

    const { opacity, transform } = useSpring ({
        'opacity': flipped ? 1 : 0,
        'transform': `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
        'config': { 'mass': 10, 'tension': 500, 'friction': 80 },
    })

    return (
        <StyledContainer
            onClick={() => setFlipped (flipped => !flipped)}
        >
            <StyledCardFront
                size={size}
                style={{ 'opacity': opacity.interpolate (o => 1 - o), transform }}
            >
                {children}
            </StyledCardFront>
            {
                children.props.noback
                    ?
                    null
                    :
                    <StyledCardBack
                        size={size}
                        style={{
                            opacity,
                            'transform': transform.interpolate (t => `${t} rotateY(180deg)`),
                        }}
                    >
                        {children}
                    </StyledCardBack>
            }
        </StyledContainer>
    )

}