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
  // redirect to search by keyword
  useEffect(() => {
    if (keyword && keyword !== '' && id === '') {
      router.push(`/items?q=${keyword}`)
    }
  }, [keyword])
  // redirect to search by id
  useEffect(() => {
    if (id && id !== '') {
      router.push(`/items/${id}`)
    }
  }, [id])
  if (router) {
    // get id from url
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
