import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
const BASE_URL = 'http://localhost:3000/api'
const LIMIT = 4
const OFFSET = 0

export const useGetItems = (path, limit = LIMIT, offset = OFFSET) => {
  if (!path) {
    throw new Error('Path is required')
  }

  const url = `${BASE_URL}${path}&limit=${limit}&offset=${offset}`

  const { data: posts, error } = useSWR(url, fetcher)

  return { posts, error }
}

export const useGetItemDetail = (path) => {
  if (!path) {
    throw new Error('Path is required')
  }

  const url = `${BASE_URL}${path}`

  const { data: posts, error } = useSWR(url, fetcher)

  return { posts, error }
}
