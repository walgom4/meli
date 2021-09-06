import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import icSearch from '@public/assets/ic_Search.png'
import logo from '@public/assets/Logo_ML.png'
import Image from 'next/image'
import styled from 'styled-components'
import { setUrl } from '@store/slice/searchSlice'
import { GeneralContainer } from '../atoms/container'

const SearchContainer = styled.header`
  background-color: ${props => props.theme.primary[0]};
  width: 100%;
  height: ${props => props.theme.height.header};
  position:sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`
const SearchElementsContainer = styled.div`
  display: flex;
  & input{
    width: calc(100vw - 53px  - 37px - ${props => props.theme.spacing.x8});
    @media (min-width: ${props => props.theme.bp.xl}){
      width: calc(${props => props.theme.bp.xl} - 53px - 37px - ${props => props.theme.spacing.x8});
    }
  }
  & .image{
    width: 53px;
    height: 36px;
  }
`
const ButtonSearchBar = styled.button`
  border: unset;
  background-color: ${props => props.theme.primary[3]};
  padding: 8px;
  width: 37px;
  cursor: pointer;
`
const InputSearchBar = styled.input`
  border: unset;
  background-color: white;
  font-size: ${props => props.theme.font_size.description};
  padding: 8px;
  margin-left: ${props => props.theme.spacing.x8};
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
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // set keyword to reducer
      dispatch(setUrl(`${keyword}`))
    }
  }
  useEffect(() => {
    setKeyword(keywordValue)
  }, [keywordValue])
  return (
    <SearchContainer>
      <GeneralContainer>
        <div className="row">
          <SearchElementsContainer>
            <div className="image">
              <Image src={logo} alt="Logo" width={53} height={36} quality={100}/>
            </div>
            <InputSearchBar type="text" value={keyword} placeholder={t('Never stop searching')} onChange={(event) => handleKeyword(event)} onKeyDown={(event) => handleKeyDown(event)}/>
            <ButtonSearchBar onClick={() => handleSearch()}><Image src={icSearch} alt="ic search" /></ButtonSearchBar>
          </SearchElementsContainer>
        </div>
      </GeneralContainer>
    </SearchContainer>
  )
}
