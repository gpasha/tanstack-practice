import { LoginButton } from "./login-button"
import { CurrentUser } from "./current-user/current-user"
import { useMeQuery } from "../api/use-me-query"
import { LogoutButton } from "./logout-button"
import cls from "./account-bar.module.css"

export const AccountBar = () => {
  const { data } = useMeQuery()

  return (
    <>
      {data?.userId &&
        (<div className={cls.container}>
          <CurrentUser />
          <LogoutButton />
        </div>
        )}
      {!data?.userId && <LoginButton />}
    </>
  )
}
