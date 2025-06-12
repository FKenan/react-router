import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div id="main-layout">
      <header className="container">
        <h1>Course App</h1>
        <nav>
          {/* end prop, bu linkin sadece tam eşleşme durumunda(yani verilen path ile bitmesi durumunda) aktif olmasını sağlar.yani http://localhost:3000/abc gelirse active classı verilmez 
        end verilmezse bu path sürekli olarak active görünür.*/}
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="courses">Courses</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
        {/* Outlet, MainLayout bileşeninin içinde render edilecek olan sayfaları gösterir.
        routes içindeki children sayfaları burada gösteririlir. */}
      </main>
    </div>
  );
}
