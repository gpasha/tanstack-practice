import { Link } from "@tanstack/react-router"
import { useMeQuery } from "../../api/use-me-query"

export const CurrentUser = () => {
  const { data } = useMeQuery()

  if (!data?.login) {
    return <span>...</span>
  }

  return (
    <div>
      <Link to='/my-playlist' activeOptions={{ exact: true }}>
        {data?.login}
      </Link>
    </div>
  )
}
