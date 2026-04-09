import { LoginButton } from "./login-button"
import { CurrentUser } from "./current-user/current-user"
import { useMeQuery } from "../api/use-me-query"

export const AccountBar = () => {
  const { data } = useMeQuery()

  return (
    <>
      {data?.userId && <CurrentUser />}
      {!data?.userId && <LoginButton />}
    </>
  )
}
