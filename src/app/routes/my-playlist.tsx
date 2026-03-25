import { createFileRoute } from '@tanstack/react-router'
import { MyPlayListPage } from '../../pages/my-playlist-page'

export const Route = createFileRoute('/my-playlist')({
  component: MyPlayListPage,
})
