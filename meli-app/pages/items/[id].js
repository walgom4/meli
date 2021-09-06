import React, { useEffect } from 'react'
import PageTemplate from '@components/template/pageTemplate'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setUrlDetails } from '@store/slice/searchSlice'
import { DataDetail } from '@components/organisms/dataDetail'

export default function ItemsId() {
  const { id, keyword } = useSelector(state => state.url)
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    if (keyword && keyword !== '' && id === '') {
      router.push(`/items?q=${keyword}`)
    }
  }, [keyword])
  useEffect(() => {
    if (id && id !== '') {
      router.push(`/items/${id}`)
    }
  }, [id])
  if (router) {
    useEffect(() => {
      const { id } = router.query
      if (id) {
        dispatch(setUrlDetails(`${id}`))
      }
    }, [router.query])
  }

  return (
    <PageTemplate>
        {id && id !== '' && <DataDetail data={id} />}
    </PageTemplate>
  )
}
