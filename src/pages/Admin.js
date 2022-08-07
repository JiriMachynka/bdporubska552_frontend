import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className="flex flex-row px-3 py-2 gap-[15px]">
        <div>
          <ul className="flex flex-col w-[150px]">
            <li className="admin-navbar-item"><Link to="/admin/manage-announcements">Správa oznámení</Link></li>
            <li className='admin-navbar-item'><Link to="/admin/files-manager">Správce souborů</Link></li>
          </ul>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
    </div>
  )
}

export default Admin