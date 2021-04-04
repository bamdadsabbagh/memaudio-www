import React from 'react'
import styles from './layout-main.module.scss'

export default function LayoutMain ({ children }) {

    return (
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )

}