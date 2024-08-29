import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./layout/layout";
import { Blogs } from "./pages/Blogs";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/blogs", element: <Blogs /> },
        { path: "/services", element: <Services /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
