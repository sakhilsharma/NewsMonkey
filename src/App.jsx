import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import  News  from './components/News.jsx';

function App() {
  const pageSize = 15;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />< News key="sports" pageSize={pageSize} country="us" category="sports" />
      </>
    },
    {
      path: "/business",
      element: <>
        <Navbar />< News key="general" pageSize={pageSize} country="us" category="business" />
      </>
    },
    {
      path: "/entertainment",
      element: <>
        <Navbar /> < News key="entertainment" pageSize={pageSize} country="us" category="entertainment" />
      </>
    },
    {
      path: "/general",
      element: <>
        <Navbar />< News key="general" pageSize={pageSize} country="us" category="general" />
      
      </>
    },
    {
      path: "/health",
      element: <>
        <Navbar />< News key="health" pageSize={pageSize} country="us" category="health" />
      </>
    },
    {
      path: "/science",
      element: <>
        <Navbar />< News key="science "pageSize={pageSize} country="us" category="science" />
      </>
    },
    {
      path: "/sports",
      element: <>
        <Navbar />< News key="sports" pageSize={pageSize} country="us" category="sports" />
      </>
    },
    {
      path: "/technology",
      element: <>
        <Navbar /> < News key="technology" pageSize={pageSize} country="us" category="technology" />
      </>
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
