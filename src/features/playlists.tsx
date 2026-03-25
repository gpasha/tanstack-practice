
import { client } from '../shared/api/client'
import { useQuery } from '@tanstack/react-query'

export function PlayList() {

  const { data, isFetching, isPending } = useQuery({
    queryKey: ['playlists'],
    queryFn: async () => {
      const response = await client.GET('/playlists')
      const data = response.data
      return data
    }
  })

  if (isFetching || isPending) {
    return <p>Loading...</p>
  }

  return (
    <>
      <ul>
        {data?.data?.map(track => <li key={track.id}>{track.attributes.title}</li>)}
      </ul>
    </>
  )
}
