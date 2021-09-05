import React from 'react'
import styled from 'styled-components'
import { useGetItemDetail } from '@hooks/useRequest'
// import Image from 'next/image'

const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #EEEEEE;
  .itemList{
    background-color: white;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    .item{ 
      padding: 10px;
    }
  }
  .image {
    position: relative;
    border-radius: 4px;
    width: 180px;
    height: 180px;
    padding: 0 1px;
  }
`

export const DataDetail = ({ url }) => {
  if (url !== null) {
    const { posts, error } = useGetItemDetail(url)
    if (error) return <h1>Ha ocurrido un error!</h1>
    if (!posts) {
      return (<DataContainer>
        <div className="item"><h1>Cargando...</h1>
        </div>
        </DataContainer>)
    }
    return (
      <DataContainer>
        <div className="itemList">
          {posts?.item?.description}
        </div>
      </DataContainer>
    )
  } else {
    return (<></>)
  }
}
