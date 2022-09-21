import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate  } from "react-router-dom"
import { ShoppingPage } from "../component-patterns/pages"

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
       <div className="main-layout">
            <nav>
                <img src={logo} alt="react-logo"/>
            <ul>
               <li >
                  <NavLink to={''} className={({ isActive }) => isActive ? 'nav-active' : '' }>ShoppingPage</NavLink>
                </li>
            </ul>
          </nav>
          <Routes>
            <Route path={"/"} element={<ShoppingPage />} />
            <Route path="/*" element={ <Navigate to="/" replace />} />
          </Routes>
       </div>
    </BrowserRouter>
  )
}
