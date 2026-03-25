import { createFileRoute } from '@tanstack/react-router'
import { PlayListPage } from '../../pages/playlist-page'

export const Route = createFileRoute('/')({
  component: PlayListPage,
})
