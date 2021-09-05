import React from 'react'
import { PageContainer } from '@components/atoms/pageContainer'
import { Search } from '@components/atoms/searchBar'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import styles from '@styles/Home.module.css'

export default function PageTemplate({ children }) {
  const { t } = useTranslation()
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

      <footer className={styles.footer}>
        <a
          href="https://github.com/walgom4/meli"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Made by Walter Gomez')}

        </a>
      </footer>
    </PageContainer>
  )
}
