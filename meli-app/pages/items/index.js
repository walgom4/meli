import React, { useEffect } from 'react'
import { DataList } from '@components/organisms/dataList'
import PageTemplate from '@components/template/pageTemplate'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setUrl } from '@store/slice/searchSlice'

export default function Home() {
  const { value: url, keyword } = useSelector(state => state.url)
  const dispatch = useDispatch()
  const router = useRouter()
  const { q } = router.query
  useEffect(() => {
    if (url && keyword && url !== '') {
      router.push(url)
    }
  }, [url])
  useEffect(() => {
    if (q) dispatch(setUrl(`${q}`))
  }, [q])
  return (
    <PageTemplate>
      {url && keyword && url !== '' && <DataList url={url} />}
    </PageTemplate>
  )
}
