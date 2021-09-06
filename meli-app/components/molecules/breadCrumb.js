import React from 'react'
import styled from 'styled-components'
import { GeneralContainer } from '@components/atoms/container'
import { useSelector } from 'react-redux'

const BreadCrumbContainer = styled.div`
  font-size: ${props => props.theme.font_size.breadcrumb};
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.primary[3]};
  color: ${props => props.theme.primary[1]};
  padding: ${props => props.theme.spacing.x8} 0;
`
const BreadCrumbElement = styled.div`
  cursor: pointer;
  & div{
    padding: 0 ${props => props.theme.spacing.x4};
  }
`
export const BreadCrumb = () => {
  const { categories } = useSelector(state => state.categories)
  return (
    <BreadCrumbContainer>
      <GeneralContainer>
        <div className='row'>
          {categories.map((element, i) => {
            return <BreadCrumbElement className="row" key={element}>{element}{i < categories.length - 1 ? <div>{'>'}</div> : ''}</BreadCrumbElement>
          })}
        </div>
      </GeneralContainer>
    </BreadCrumbContainer>
  )
}
