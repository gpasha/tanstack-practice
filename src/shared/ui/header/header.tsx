import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import cls from './header.module.css'

type Props = {
  renderAccountBar: () => ReactNode
}

export const Header = ({ renderAccountBar }: Props) => (
  <>
    <div className={cls.container}>
      <div>
        <Link to="/" className="[&.active]:font-bold">
          Playlists
        </Link>{' / '}
        <Link to="/my-playlist" className="[&.active]:font-bold">
          My Playlist
        </Link>{' / '}
        <Link to="/oauth/callback" className="[&.active]:font-bold">
          OAuth page (TEMP)
        </Link>
      </div>
      <div className={cls.account}>{renderAccountBar()}</div>
    </div>
  </>
)
