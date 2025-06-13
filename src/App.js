import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home";
import About from "./pages/About";
import CoursesPage, { coursesLoader } from "./pages/course/Courses";
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLayout  ";
import FaqPage from "./pages/help/Faq";
import ContactPage from "./pages/help/Contact";
import CourseDetailsPage, {
  courseDetailsLoader,
} from "./pages/course/CourseDetails";
import CourseLayout from "./layouts/CourseLayout";
import CourseCreatePage from "./pages/course/CourseCreate";
import CourseEditPage from "./pages/course/CourseEdit";

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
      {
        path: "courses",
        element: <CourseLayout />,
        children: [
          // loader olarak coursesLoader fonksiyonunu atadık.useLoaderData fonksiyonunu Courses içinde çağırarak bu veriyi kullanabiliriz.
          { index: true, element: <CoursesPage />, loader: coursesLoader },
          {
            id: "course-details", // bu id ile courseDetailsLoader fonksiyonuna erişebiliriz.
            path: ":courseId",
            loader: courseDetailsLoader, // bu loader verilerine alttaki childrenlardan ulaşabiliriz.
            children: [
              { index: true, element: <CourseDetailsPage /> },
              { path: "edit", element: <CourseEditPage /> },
            ],
          },
          { path: "create", element: <CourseCreatePage /> },
        ],
      },
      {
        // courses/:courseId şeklinde bir url tanımladık. courseId dinamik bir parametre.
        // loader a verilen courseDetailsLoader fonksiyonundan parametrelere ulaşabliliriz.
        path: "courses/:courseId",
        element: <CourseDetailsPage />,
        loader: courseDetailsLoader,
      },
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
