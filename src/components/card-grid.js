import React from 'react'
import Card from '@/components/card'
import styles from './card-grid.module.scss'

export default function CardGrid ({ width, height, children }) {

    const totalChildren = width + height

    console.log (width, height)

    console.log (totalChildren)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {children}
                </div>
            </div>
        </>
    )

}