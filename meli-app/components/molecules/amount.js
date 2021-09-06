import React from 'react'
import styled from 'styled-components'
import { currencyFormat } from '@utils/utils'
import Image from 'next/image'
import icShipping from '@public/assets/ic_shipping.png'

const AmountContainer = styled.div`
  font-size: ${props => props.theme.font_size.price};
  display: flex;
  flex-wrap: wrap;
  margin-top: ${props => props.theme.spacing.x8};
`
const AmountValue = styled.div`
  padding-bottom: ${props => props.theme.spacing.x16};
`
const FreeShipping = styled.div`
  padding-left: ${props => props.theme.spacing.x8};
`

export const Amount = (props) => {
  return (
    <AmountContainer>
      <AmountValue>{currencyFormat(props.item?.price?.amount)}</AmountValue>
      {props.item.free_shipping ? <FreeShipping> <Image src={icShipping} alt="shipping icon" width="20" height="20" quality={100}/></FreeShipping> : ''}
    </AmountContainer>
  )
}
