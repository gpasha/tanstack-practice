
import { client } from '../shared/api/client'
import { useQuery } from '@tanstack/react-query'
import { PaginationNav } from '../shared/ui/pagination/pagination'
import { useState } from 'react'

export function PlayList() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const { data, isFetching, isPending, isError } = useQuery({
    queryKey: ['playlists', { page, search }],
    queryFn: async ({ signal }) => {
      const response = await client.GET('/playlists', {
        params: {
          query: {
            pageNumber: page,
            search
          }
        },
        signal
      })
      const data = response.data
      return data
    }
  })

  if (isFetching || isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
    <>
      <PaginationNav
        current={page}
        pagesCount={data?.meta.pagesCount ?? 20}
        onChange={setPage}
      />
      <div>
        <input value={search} onChange={e => setSearch(e.currentTarget.value)} placeholder='search...' />
      </div>
      <ul>
        {data?.data?.map(track => <li key={track.id}>{track.attributes.title}</li>)}
      </ul>
    </>
  )
}
