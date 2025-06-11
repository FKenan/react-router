import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/about", element: <About /> },
  { path: "/courses", element: <Courses /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
