import React from 'react'
import styled from 'styled-components'
import { useGetItemDetail } from '@hooks/useRequest'
import { GeneralContainer } from '@components/atoms/container'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { currencyFormat } from '@utils/utils'
import { useDispatch } from 'react-redux'
import { setTitle, setImage, setDescription } from '@store/slice/metasSlice'

const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.primary[3]};
  height: ${props => props.theme.height.section};
  padding-bottom: ${props => props.theme.height.header};
  & .itemList{
  }
  & #image {
    position: relative;
    border-radius: 4px;
    max-width: 680px;
    max-height: 680px;
    height: 100vw;
  }
  `

const ItemDataContainer = styled.div`
  padding: ${props => props.theme.spacing.x16};
  background-color: white;
  `
const TitleDescription = styled.div`
  font-size: ${props => props.theme.font_size.title};
  color: ${props => props.theme.primary[1]};
  padding-bottom: ${props => props.theme.spacing.x16};
  padding-top: ${props => props.theme.spacing.x8};
  font-weight: ${props => props.theme.font_weight.x4};
  `
const TitleDetail = styled.div`
  font-size: ${props => props.theme.font_size.titleDetail};
  color: ${props => props.theme.primary[1]};
  padding-bottom: ${props => props.theme.spacing.x16};
  font-weight: ${props => props.theme.font_weight.x5};
  `
const PriceDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: ${props => props.theme.font_size.priceDetail};
  color: ${props => props.theme.primary[1]};
  padding-bottom: ${props => props.theme.spacing.x16};
  font-weight: ${props => props.theme.font_weight.x4};
  & .decimal{
    font-size: ${props => props.theme.font_size.priceDetailDecimal};
    margin-top: 5px;
  }
  `
const Description = styled.div`
  font-size: ${props => props.theme.font_size.description};
  color: ${props => props.theme.primary[1]};
  padding-bottom: ${props => props.theme.spacing.x16};
  `
const Condition = styled.div`
  font-size: ${props => props.theme.font_size.condition};
  padding-bottom: ${props => props.theme.spacing.x7};
`
const Button = styled.button`
  font-size: ${props => props.theme.font_size.primaryButton};
  padding-bottom: ${props => props.theme.spacing.x7};
  background-color: ${props => props.theme.primary[5]};
  color: ${props => props.theme.primary[3]};
  border: unset;
  padding: ${props => props.theme.spacing.x7};
  border-radius: ${props => props.theme.spacing.x2};
  width: 100%;
  cursor: pointer;
  `
const DetailContainer = styled.div`
  width: calc(100% - ${props => props.theme.spacing.x16});
`

export const DataDetail = ({ data }) => {
  if (data !== null) {
    const { t } = useTranslation()
    const { posts, error } = useGetItemDetail(data)
    const dispatch = useDispatch()
    if (error) return <h1>Ha ocurrido un error!</h1>
    if (!posts) {
      return (<DataContainer>
        <div className="item"><h1>Cargando...</h1>
        </div>
        </DataContainer>)
    }
    if (posts) {
      dispatch(setTitle(posts.item.title))
      dispatch(setDescription(posts.item.description))
      dispatch(setImage(posts.item.picture))
    }
    return (
      <DataContainer>
        <GeneralContainer>
          <ItemDataContainer>
            <div className="row">
                <div className="col-sm-12 col-md-9">
                  <div id="image">
                    <Image key={`img_${posts.item.id}`} src={posts.item.picture} alt={posts.item.title} layout="fill" objectFit={'contain'} quality={100}/>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3">
                  <DetailContainer>
                    <Condition>
                      {`${t(posts?.item?.condition)} - ${posts?.item?.sold_quantity} ${t('sold')}`}
                    </Condition>
                    <TitleDetail>
                      {posts?.item?.title}
                    </TitleDetail>
                    <PriceDetail>
                      {posts?.item?.price?.amount ? currencyFormat(posts?.item?.price?.amount) : '0'}<div className="decimal">00</div>
                    </PriceDetail>
                    <Button>Comprar</Button>
                  </DetailContainer>
                </div>
              </div>
            <TitleDescription>{t('Product description')}</TitleDescription>
            <Description>
              {posts?.item?.description}
            </Description>
          </ItemDataContainer>
        </GeneralContainer>
      </DataContainer>
    )
  } else {
    return (<></>)
  }
}
