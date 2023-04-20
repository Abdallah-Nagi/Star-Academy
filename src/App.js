import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Home from "./Home/Home";
import Courses, { coursesLoader } from "./Courses/Courses";
import Account from "./Account/Account";
import Cart from "./Cart/Cart";
import Course, { singleCourseLoader } from "./Course/Course";
// layouts
import RootLayout from "./layouts/RootLayout";
import CoursesLayout from "./layouts/CoursesLayout";
// Scroll to top
import ScrollToTop from "./helpers/ScrollToTop";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="courses" element={<CoursesLayout />}>
        <Route index element={<Courses />} loader={coursesLoader} />
        <Route path=":id" element={<Course />} loader={singleCourseLoader} />
      </Route>
      <Route path="account" element={<Account />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
