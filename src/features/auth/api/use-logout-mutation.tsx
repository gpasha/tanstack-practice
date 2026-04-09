import { useMutation, useQueryClient } from "@tanstack/react-query"
import { client } from "../../../shared/api/client"

export const callbackUrl = 'http://localhost:3000/oauth/callback'

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()
  const refreshToken = localStorage.getItem('musicfun-refresh-token') ?? ''

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await client.POST('/auth/logout', {
        body: {
          refreshToken: refreshToken
        }
      })

      return response.data;
    },
    onSuccess: () => {
      localStorage.removeItem('musicfun-access-token')
      localStorage.removeItem('musicfun-refresh-token')
      // use resetQueries for this case !!!
      queryClient.resetQueries({
        queryKey: ['auth', 'me']
      })
    }
  })

  return mutation
}
