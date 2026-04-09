import { useMutation, useQueryClient } from "@tanstack/react-query"
import { client } from "../../../shared/api/client"

export const callbackUrl = 'http://localhost:3000/oauth/callback'

export const useLoginMutation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async ({ code }: { code: string }) => {
      const response = await client.POST('/auth/login', {
        body: {
          code,
          redirectUri: callbackUrl,
          accessTokenTTL: '10s',
          rememberMe: true
        }
      })

      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('musicfun-access-token', data?.accessToken ?? '')
      localStorage.setItem('musicfun-refresh-token', data?.refreshToken ?? '')
      queryClient.invalidateQueries({
        queryKey: ['auth', 'me']
      })
    }
  })

  return mutation
}
