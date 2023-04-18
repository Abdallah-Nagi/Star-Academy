import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="courses" element={<Courses />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
