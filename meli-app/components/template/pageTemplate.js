import React from 'react'
import { PageContainer } from '@components/atoms/pageContainer'
import { Search } from '@components/atoms/searchBar'
import Head from 'next/head'

export default function PageTemplate({ children }) {
  return (
    <PageContainer>
      <Head>
        <title>Mercado Libre</title>
        <meta name="description" content="Prueba de búsqueda, usando reactjs, nodejs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Search />
      <main>
        {children}
      </main>
    </PageContainer>
  )
}
