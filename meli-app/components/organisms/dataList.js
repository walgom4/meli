import React from 'react'
import styled from 'styled-components'
import { useGetItems } from '@hooks/useRequest'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setUrlDetails } from '@store/slice/searchSlice'
import { setCategories } from '@store/slice/categoriesSlice'
import { useRouter } from 'next/router'
import { GeneralContainer } from '@components/atoms/container'
import { Amount } from '@components/molecules/amount'
import { Description } from '@components/atoms/description'
import { Place } from '@components/atoms/place'

const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.primary[3]};
  height: ${props => props.theme.height.section};
  padding-bottom: ${props => props.theme.height.header};
  & .itemList{
    background-color: white;
  }
  & .image {
    position: relative;
    border-radius: 4px;
    width: 180px;
    height: 180px;
    margin: ${props => props.theme.spacing.x8} ${props => props.theme.spacing.x8} ${props => props.theme.spacing.x8} 0;
  }
  `
const Item = styled.div`
  & > .row:first-child{
    margin: 0 ${props => props.theme.spacing.x8};
    border-bottom: 1px ${props => props.theme.primary[3]} solid;
  }
`

export const DataList = ({ data }) => {
  if (data !== null) {
    const { posts, error } = useGetItems(data)
    const dispatch = useDispatch()
    const router = useRouter()
    if (error) return <h1>Ha ocurrido un error!</h1>
    if (!posts) {
      return (<DataContainer>
        <div className="item"><h1>Cargando...</h1>
        </div>
        </DataContainer>)
    }
    if (posts && posts.categories) {
      dispatch(setCategories(posts.categories))
    }
    return (
      <DataContainer>
        <GeneralContainer>
          <div className="itemList">
          {posts && posts.items && posts.items.map((item) => {
            return (
              <Item key={item.id} onClick={() => {
                dispatch(setUrlDetails(`${item.id}`))
                router.push(`/items/${item.id}`)
              }}>
                <div className="row">
                  <div className="col-sm-8 col-lg-10">
                    <div className="row">
                      <div className="image">
                        <Image key={`img_${item.id}`} src={item.picture} alt={item.title} layout="fill" objectFit={'contain'} quality={100}/>
                      </div>
                      <div className="col-sm-12 col-lg-6">
                        <Amount item={item}></Amount>
                        <Description>{item.title}</Description>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-lg-2">
                    <Place>{item?.state_name}</Place>
                  </div>
                </div>
              </Item>
            )
          }
          )}
          </div>
        </GeneralContainer>
      </DataContainer>
    )
  } else {
    return (<></>)
  }
}
