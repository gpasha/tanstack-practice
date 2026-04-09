import { Outlet } from '@tanstack/react-router'
import { Header } from '../../shared/ui/header/header'
import cls from './root-layout.module.css'
import { AccountBar } from '../../features/auth/ui/account-bar'

export const RouteLayout = () => (
  <>
    <Header renderAccountBar={() => <AccountBar />} />
    <div className={cls.container}>
      <Outlet />
    </div>
  </>
)