import React, { useEffect, useState } from 'react'
import { DataList } from '@components/organisms/dataList'
import PageTemplate from '@components/template/pageTemplate'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setUrl } from '@store/slice/searchSlice'
import { setDescription, setTitle } from '@store/slice/metasSlice'

export default function Items() {
  const { keyword, id } = useSelector(state => state.url)
  const dispatch = useDispatch()
  const router = useRouter()
  const [stateKeyword, setstateKeyword] = useState('')
  // effect to redirect when user search
  useEffect(() => {
    if (keyword && keyword !== '') {
      setstateKeyword(keyword)
      router.push(`/items?q=${keyword}`)
    }
  }, [keyword])
  if (router) {
    // effect to set search, description, title
    useEffect(() => {
      // get query 'q' from url
      const { q } = router.query
      if (q) {
        dispatch(setUrl(`${q}`))
        dispatch(setDescription(`${q}`))
        dispatch(setTitle(`${q}`))
      }
    }, [router.query])
  }
  return (
    <PageTemplate>
      {stateKeyword && keyword && stateKeyword !== '' && id === '' && <DataList data={stateKeyword} />}
    </PageTemplate>
  )
}
