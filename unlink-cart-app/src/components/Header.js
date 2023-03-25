import { NavLink } from "react-router-dom"
export default function Header() {

  return (
    <header className="nav-header">
      <NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending nav-item" : isActive ? "active nav-item" : "nav-item"
      } >Products</NavLink>
      <NavLink to="/cart" className={({ isActive, isPending }) =>
        isPending ? "pending nav-item" : isActive ? "active nav-item" : "nav-item"
      } >Cart</NavLink>
    </header>
  )
}