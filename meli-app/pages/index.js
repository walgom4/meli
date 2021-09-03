import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useTranslation } from 'react-i18next';
import { SearchContainer } from '../components/atoms/searchBar';
import { PageContainer } from '../components/atoms/pageContainer';
import { Container, Row, Col } from 'react-grid-system';

export default function Home() {
  const { t, i18n } = useTranslation();
  const handleSearch = (event) => {
    console.log("buscar", event.target.value);
  }
  return (
    <PageContainer>
      <Head>
        <title>Mercado Libre</title>
        <meta name="description" content="Prueba de búsqueda, usando reactjs, nodejs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchContainer>
        <input type="text" placeholder={t('Never stop searching')} onChange={(event) => handleSearch(event)} />
        <Container fluid>
          <Row align="center" justify="center" direction="row">
            <Col sm={4}>
              One of three columns
            </Col>
            <Col sm={4}>
              One of three columns
            </Col>
            <Col sm={4}>
              One of three columns
            </Col>
          </Row>
        </Container>
      </SearchContainer>
      <main className={styles.main}>
        <div>translate: {t('Welcome to React')}</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Made by Walter Gomez')}

        </a>
      </footer>
    </PageContainer>
  )
}
