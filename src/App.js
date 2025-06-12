import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import MainLayout from "./layouts/MainLayout";

// http://localhost:3000/ mainlayouta denk gelir ve home page yönlendirir.
// http://localhost:3000/home home page yönlendirir.
// http://localhost:3000/about about sayfasına yönlendirir.
// http://localhost:3000/courses courses sayfasına yönlendirir.
// bu sayfaların hepsi MainLayout içinde render edilir. yani MainLayout bileşeni her sayfada görünür.
// children içinde url tanımlarken / ile başlamaya gerek yoktur.
// children içinde index true olarak ayarlanırsa, bu sayfa ana sayfa olarak kabul edilir ve / adresine yönlendirildiğinde bu sayfa gösterilir.
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <Courses /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
