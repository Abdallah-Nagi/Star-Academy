import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Home from "./Home/Home";
import Courses, { coursesLoader } from "./components/Courses/Courses";
import Account from "./components/Account/Account.js";
import LogIn from "./components/Account/LogIn/Login";
import SignUp from "./components/Account/SignUp/SignUp";
import Cart from "./components/Cart/Cart";
import Course, { singleCourseLoader } from "./components/Course/Course";
// layouts
import RootLayout from "./layouts/RootLayout";
import CoursesLayout from "./layouts/CoursesLayout";
import AccountLayout from "./layouts/AccountLayout";
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
      <Route path="account" element={<AccountLayout />}>
        <Route index element={<Account />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Route>
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
