import { NavLink, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="help-layout">
      <h1>Help</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magni
        veritatis facilis odit, ipsa rerum, alias dolorem minima dolorum
        eligendi ab debitis quia!
      </p>
      {/* <NavLink to="/help" end>
        Contact
      </NavLink>  bu şekilde de tanımlanablilir.*/}
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="faq">FAQ</NavLink>

      <main>
        <Outlet />
        {/* Outlet, HelpLayout bileşeninin içinde render edilecek olan sayfaları gösterir. yani helplayout routeunun aldındaki childrenlar*/}
      </main>
    </div>
  );
}
