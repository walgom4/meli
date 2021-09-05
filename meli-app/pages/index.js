import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PageTemplate from '@components/template/pageTemplate'
import { useRouter } from 'next/router'

export default function Home() {
  const url = useSelector(state => state.url.value)
  const router = useRouter()
  useEffect(() => {
    router.push(url)
  }, [url])
  return (
    <PageTemplate />
  )
}
