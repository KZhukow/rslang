import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/statistics"> Statistics</NavLink>
        <NavLink to="/tutorial"> Tutorial</NavLink>
      </header>
      <Outlet />
      <footer> 2022 </footer>
    </>
  );
}
