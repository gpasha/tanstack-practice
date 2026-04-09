import { useLogoutMutation } from "../api/use-logout-mutation"

export const LogoutButton = () => {
  const mutation = useLogoutMutation()

  return (
    <button onClick={() => { mutation.mutate() }}>Logout</button>
  )
}
