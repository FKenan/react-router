import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div id="main-layout">
      <h1>Main layout</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <main>
        <Outlet />
        {/* Outlet, MainLayout bileşeninin içinde render edilecek olan sayfaları gösterir.
        routes içindeki children sayfaları burada gösteririlir. */}
      </main>
    </div>
  );
}
