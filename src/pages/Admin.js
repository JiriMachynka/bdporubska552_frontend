import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="flex flex-row gap-[15px]">
        <div>
          <ul className="flex flex-col w-fit h-[800px] bg-blue-500 rounded-br-xl">
            <li><Link className="admin-navbar-item" to="/admin/manage-announcements">Správa oznámení</Link></li>
          </ul>
        </div>
        <div className="w-full bg-slate-400 mr-2">
          <Outlet />
        </div>
    </div>
  )
}

export default Admin