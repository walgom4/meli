import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import icSearch from '../../public/assets/ic_Search.png'
import Image from 'next/image'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import { setUrl } from '@store/slice/searchSlice'

export const SearchContainer = styled.header`
  background-color: yellow;
  width: 100%;
  height: 100px;
  position:sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

export const Search = () => {
  const { t } = useTranslation()
  const [keyword, setKeyword] = useState('')
  const { keyword: keywordValue } = useSelector(state => state.url)
  const dispatch = useDispatch()
  const handleKeyword = (event) => {
    setKeyword(`${event.target.value}`)
  }

  const handleSearch = () => {
    if (keyword && keyword !== '') {
      // set keyword to reducer
      dispatch(setUrl(`${keyword}`))
    }
  }
  console.log(keywordValue)
  useEffect(() => {
    setKeyword(keywordValue)
  }, [])
  return (
    <SearchContainer>
      <Container fluid>
        <Row align="center" justify="center" direction="row">
          <Col sm={12}>
            <input type="text" value={keyword} placeholder={t('Never stop searching')} onChange={(event) => handleKeyword(event)} />
            <button onClick={() => handleSearch()}><Image src={icSearch} alt="ic search" /></button>
          </Col>

        </Row>
      </Container>
    </SearchContainer>
  )
}
