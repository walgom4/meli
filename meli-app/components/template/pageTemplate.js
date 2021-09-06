import React from 'react'
import { PageContainer } from '@components/atoms/pageContainer'
import { Search } from '@components/organisms/searchBar'
import Head from 'next/head'
import { BreadCrumb } from '@components/molecules/breadCrumb'
import { useSelector } from 'react-redux'

export default function PageTemplate({ children }) {
  const { domain, title, description, image, site, card } = useSelector(state => state.metas)
  return (
    <PageContainer>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="twitter:card" content={card} />
        <meta name="twitter:site" content={site} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:domain" content={domain} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={image} />
        <meta name="og:url" content={domain} />
        <link rel="icon" href="/assets/Logo_ML.png" />
      </Head>
      <Search />
      <BreadCrumb/>
      <main>
        {children}
      </main>
    </PageContainer>
  )
}
