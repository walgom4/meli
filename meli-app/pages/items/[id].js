import React, { useEffect } from 'react'
import PageTemplate from '@components/template/pageTemplate'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setUrlDetails } from '@store/slice/searchSlice'
import { DataDetail } from '@components/organisms/dataDetail'

export default function ItemsId() {
  const { value: url, keyword } = useSelector(state => state.url)
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    if (url && keyword && url !== '') {
      router.push(url)
    }
  }, [url])
  useEffect(() => {
    const { id } = router.query
    if (id) {
      dispatch(setUrlDetails(`${id}`))
    }
  }, [router])

  return (
    <PageTemplate>
        {url && keyword && url !== '' && <DataDetail url={url} />}
    </PageTemplate>
  )
}
