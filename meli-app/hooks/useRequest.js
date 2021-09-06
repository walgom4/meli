import useSWR from 'swr'

// fetch data
const fetcher = (url) => fetch(url).then((res) => res.json())
const BASE_URL = process.env.BASE_URL_API
const LIMIT = process.env.LIMIT
const OFFSET = process.env.OFFSET

// hook to get items using SWR to improve performance
export const useGetItems = (value, limit = LIMIT, offset = OFFSET) => {
  if (!value) {
    throw new Error('value is required')
  }

  const url = `${BASE_URL}/items?q=${value}&limit=${limit}&offset=${offset}`

  const { data: posts, error } = useSWR(url, fetcher)

  return { posts, error }
}

// hook to get item detail using SWR to improve performance
export const useGetItemDetail = (value) => {
  if (!value) {
    throw new Error('value is required')
  }

  const url = `${BASE_URL}/items/${value}`

  const { data: posts, error } = useSWR(url, fetcher)

  return { posts, error }
}
