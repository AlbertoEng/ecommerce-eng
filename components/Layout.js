import React from 'react'
import Head from 'next/head'

const Layout = (props) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {props.children}
        </>
    )
}

export default Layout
