import { baseUrl } from "../../../shared/api/client"
import { useLoginMutation } from "../api/use-login-mutation"

const callbackUrl = 'http://localhost:3000/oauth/callback'

export const LoginButton = () => {
  const mutation = useLoginMutation()

  const handleLoginClick = () => {
    window.addEventListener('message', handleAuthMessage)
    window.open(
      `${baseUrl}/auth/oauth-redirect?callbackUrl=${callbackUrl}`,
      'apihub-oauth2',
      'width=600,height=700,left=200,top=100,resizable=yes,scrollbars=yes',
    )
  }

  const handleAuthMessage = (event: MessageEvent) => {
    window.removeEventListener('message', handleAuthMessage)
    if (event.origin !== document.location.origin) {
      console.warn('Message origin does NOT match!')
      return;
    }

    const code = event.data?.code

    if (!code) {
      console.warn('No code in url')
      return
    }

    console.log("code: ", code);
    mutation.mutate({ code })
  }

  return (
    <button onClick={handleLoginClick}>Login with APIHUB</button>
  )
}
