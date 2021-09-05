import React, { useEffect } from 'react'
import { DataList } from '@components/organisms/dataList'
import PageTemplate from '@components/template/pageTemplate'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setUrl } from '@store/slice/searchSlice'

export default function Items() {
  const { value: url, keyword, id } = useSelector(state => state.url)
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    if (url && keyword && url !== '' && window.location.href !== url) {
      router.push(url)
    }
  }, [url])
  useEffect(() => {
    const { q } = router.query
    console.log(router.query)
    if (q) dispatch(setUrl(`${q}`))
  }, [router])
  return (
    <PageTemplate>
      {url && keyword && url !== '' && id === '' && <DataList url={url} />}
    </PageTemplate>
  )
}
