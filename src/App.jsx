import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { mainLoader } from "./layouts/Main";

//routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// library imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Actions
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
        element: <p>You logged out</p>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
