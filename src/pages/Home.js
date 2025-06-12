export default function HomePage() {
  //  <a href="/">Home</a> ile sayfaya yönlendirme yaparsak her seferinde sayfa yeniden yüklenir.
  // Link (React Routerden gelir) kullanarak yönlendirme yaparsak sayfa yeniden yüklenmez.
  // NavLink kullanırsak aktif olan sayfa active classı ile işaretlenir. link ile aynı işlevi görür.
  return (
    <>
      <div id="home">
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          laboriosam officiis asperiores sequi possimus et libero eaque deserunt
          veritatis harum.
        </p>
      </div>
    </>
  );
}
