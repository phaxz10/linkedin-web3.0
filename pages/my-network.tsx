import Head from 'next/head'
import * as React from 'react'
import { Layout } from '../components'

const MyNetworkPage = () => {
  return (
    <div>
      <Head>
        <title>My Networks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="grid h-screen place-items-center">NETWORK PAGE</div>
      </Layout>
    </div>
  )
}

export default MyNetworkPage
