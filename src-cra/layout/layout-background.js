import React from 'react'
import { animated, useSpring } from 'react-spring'
import { layoutBackgroundColors } from './layout-background-colors'

export const LayoutBackground = () => {

    const props = useSpring ({
        'from': {
            'left': '0%',
            'top': '0%',
            'width': '0%',
            'height': '0%',
            'opacity': '0.05',
            'background': layoutBackgroundColors.emerald,
        },
        'to': async (next) => {

            // noinspection InfiniteLoopJS
            for (; ;) {

                await next ({
                    'left': '0%',
                    'top': '0%',
                    'width': '100%',
                    'height': '100%',
                    'background': layoutBackgroundColors.soap,
                })

                await next ({ 'height': '50%', 'background': layoutBackgroundColors.emerald })

                await next ({ 'width': '50%', 'left': '50%', 'background': layoutBackgroundColors.pink })

                await next ({ 'top': '0%', 'height': '100%', 'background': layoutBackgroundColors.nickel })

                await next ({ 'top': '50%', 'height': '50%', 'background': layoutBackgroundColors.darkGreen })

                await next ({ 'width': '100%', 'left': '0%', 'background': layoutBackgroundColors.saffron })

                await next ({ 'width': '50%', 'background': layoutBackgroundColors.kombuGreen })

                await next ({ 'top': '0%', 'height': '100%', 'background': layoutBackgroundColors.keppel })

                await next ({ 'width': '100%', 'background': layoutBackgroundColors.grey })

            }

        },
    })

    return <animated.div className="layer-background" style={props}/>

}
