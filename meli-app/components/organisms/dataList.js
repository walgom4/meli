import React from 'react'
import styled from 'styled-components'
import { useGetItems } from '@hooks/useRequest'
import Image from 'next/image'
import { currencyFormat } from '@utils/utils'
import { Container, Row, Col } from 'react-grid-system'
import { useDispatch } from 'react-redux'
import { setUrlDetails } from '@store/slice/searchSlice'

export const DataContainer = styled.div`
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

const Title = (props) => {
  return (<div>{props.item.title}</div>)
}

const Amount = (props) => {
  return (<div>{currencyFormat(props.item?.price?.amount)}{props.item.free_shipping ? 'si' : ''}</div>)
}

export const DataList = ({ url }) => {
  if (url !== null) {
    const { posts, error } = useGetItems(url)
    const dispatch = useDispatch()
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
        {posts && posts.items && posts.items.map((item) => {
          return (
            <div className="item" key={item.id} onClick={() => {
              dispatch(setUrlDetails(`${item.id}`))
            }}>
              <Container fluid>
                <Row>
                  <Col md={2}>
                    <div className="image">
                      <Image key={`img_${item.id}`} src={item.picture} alt={item.title} width="180" height="180" objectFit={'contain'} quality={100}/>
                    </div></Col>
                  <Col md={6}>
                    <Amount item={item}></Amount>
                    <Title key={item.id} item={item}></Title>
                  </Col>
                  <Col md={2}>
                    <div>{item?.state_name}</div>
                  </Col>
                </Row>
              </Container>
            </div>
          )
        }
        )}
        </div>
      </DataContainer>
    )
  } else {
    return (<></>)
  }
}
