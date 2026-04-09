import { useMutation } from "@tanstack/react-query"
import { baseUrl, client } from "../../../shared/api/client"

const callbackUrl = 'http://localhost:3000/oauth/callback'

export const LoginButton = () => {

  const mutation = useMutation({
    mutationFn: async ({ code }: { code: string }) => {
      const response = await client.POST('/auth/login', {
        body: {
          code,
          redirectUri: callbackUrl,
          accessTokenTTL: '1d',
          rememberMe: true
        }
      })

      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('musicfun-access-token', data?.accessToken ?? '')
      localStorage.setItem('musicfun-refresh-token', data?.refreshToken ?? '')
    }
  })

  const handleLoginClick = () => {
    window.addEventListener('message', handleAuthMessage)
    // mutation.mutate({ code: '???' })
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
