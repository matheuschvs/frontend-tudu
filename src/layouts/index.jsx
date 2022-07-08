import { Outlet, Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import { BsCalendar4 } from 'react-icons/bs'

import { Navigation } from './styles'

export function Layout() {
  return (
    <>
      <Outlet />
      <Navigation>
        <ul>
          <Link to="/home"><AiOutlineHome /></Link>
          <Link to="/planner"><BsCalendar4 /></Link>
          <Link to="/profile"><AiOutlineUser /></Link>
          <Link to="/todos/create"><HiPlus /></Link>
        </ul>
      </Navigation>
    </>
  )
}
