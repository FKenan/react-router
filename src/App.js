import { createBrowserRouter, RouterProvider } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLayout  ";
import FaqPage from "./help/FaqPage";
import ContactPage from "./help/ContactPage";

// http://localhost:3000/ mainlayouta denk gelir ve home page yönlendirir.
// http://localhost:3000/home home page yönlendirir.
// http://localhost:3000/about about sayfasına yönlendirir.
// http://localhost:3000/courses courses sayfasına yönlendirir.
// bu sayfaların hepsi MainLayout içinde render edilir. yani MainLayout bileşeni her sayfada görünür.
// children içinde url tanımlarken / ile başlamaya gerek yoktur.
// children içinde index true olarak ayarlanırsa, bu sayfa ana sayfa olarak kabul edilir ve / adresine yönlendirildiğinde bu sayfa gösterilir.

// path tanımlarken / ile başlarsak localhost:3000/ üzerine ekler yani localhost:3000/client => localhost:3000/about gibi olur.
// Eğer / ile başlamazsak kaldığı yerden devam eder. yani localhost:3000/client/ olan url i localhost:3000/client/about gibi olur.
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> }, // bu sayfa http://localhost:3000/ adresinde gösterilir. index true olduğu için bu sayfa ana sayfa olarak kabul edilir.
      { path: "home", element: <HomePage /> }, // bu sayfa http://localhost:3000/home adresinde gösterilir.
      { path: "about", element: <About /> },
      { path: "courses", element: <Courses /> },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { index: true, element: <ContactPage /> }, // http://localhost:3000/help sayfasına gelince contact default olarak gösterilir.
          { path: "contact", element: <ContactPage /> }, // bu sayfa http://localhost:3000/help/contact adresinde gösterilir.
          { path: "faq", element: <FaqPage /> }, // bu sayfa http://localhost:3000/help/faq adresinde gösterilir.
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
