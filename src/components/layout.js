import React from 'react'
import LayoutBackground from '@/components/layout-background'
import LayoutMain from '@/components/layout-main'
import styles from './layout.module.scss'

export default function Layout ({ children }) {

    return (
        <>
            <section className={styles.container}>
                <LayoutBackground/>
                <LayoutMain>
                    {children}
                </LayoutMain>
            </section>
        </>
    )

}