
import { client } from "./shared/api/client"
import { useQuery } from "@tanstack/react-query"

function App() {

  const query = useQuery({
    queryKey: ['playlists'],
    queryFn: async () => {
      const response = await client.GET('/playlists')
      const data = response.data
      return data
    }
  })

  console.log('query: ', query)

  return (
    <>
      React App
    </>
  )
}

export default App
