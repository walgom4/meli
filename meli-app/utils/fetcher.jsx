export const fetcher = (
  url = 'http://localhost:3000/api/items?q=hoja&limit=10&offset=0'
) => fetch(url).then((res) => res.json())
