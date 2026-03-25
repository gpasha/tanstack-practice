import { useEffect } from "react"
import { client } from "./shared/api/client"

function App() {

  useEffect(() => {
    (async function () {
      const response = await client.GET('/playlists')
      const data = response.data
      console.log('data: ', data)
    })()
  }, [])
  return (
    <>
      React App
    </>
  )
}

export default App
