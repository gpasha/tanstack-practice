import { useEffect } from "react"

export function OAuthCallbackPage() {

  useEffect(() => {
    const url = new URL(window.location.href)
    const code = url.searchParams.get('code')

    if (url && window.opener) {
      console.log('window.opener: ', window.opener)
      window.opener.postMessage({ code }, window.location.origin)
    }

    window.close()
  }, [])

  return (
    <>
      <h1>OAUTH Callback page</h1>
    </>
  )
}
