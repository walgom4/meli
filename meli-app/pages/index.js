import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PageTemplate from '@components/template/pageTemplate'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { GeneralContainer } from '@components/atoms/container'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: ${props => props.theme.height.section};
  padding-bottom: ${props => props.theme.height.header};
  background-color: ${props => props.theme.primary[3]};
`
export default function Home() {
  const keyword = useSelector(state => state.url.keyword)
  const router = useRouter()
  useEffect(() => {
    if (keyword !== '') router.push(`/items?q=${keyword}`)
  }, [keyword])
  return (
    <PageTemplate>
      <HomeContainer>
      <GeneralContainer>
        Ingresa una busqueda
      </GeneralContainer>
      </HomeContainer>
    </PageTemplate>
  )
}
