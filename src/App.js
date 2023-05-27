import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import PrivacyPollicy from "./components/PrivacyPollicy/PrivacyPollicy";
import TermAndCondition from "./components/TermAndCondition/TermAndCondition";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>,
        },
        {
          path: "/privacy&Policy",
          element: <PrivacyPollicy></PrivacyPollicy>,
        },
        {
          path: "/term&Conditions",
          element: <TermAndCondition></TermAndCondition>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
