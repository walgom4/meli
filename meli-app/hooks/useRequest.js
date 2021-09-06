import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
const BASE_URL = 'http://localhost:3000/api'
const LIMIT = 4
const OFFSET = 0

export const useGetItems = (value, limit = LIMIT, offset = OFFSET) => {
  if (!value) {
    throw new Error('value is required')
  }

  const url = `${BASE_URL}/items?q=${value}&limit=${limit}&offset=${offset}`

  const { data: posts, error } = useSWR(url, fetcher)

  return { posts, error }
}

export const useGetItemDetail = (value) => {
  if (!value) {
    throw new Error('value is required')
  }

  const url = `${BASE_URL}/items/${value}`

  const { data: posts, error } = useSWR(url, fetcher)

  return { posts, error }
}
