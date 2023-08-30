import "./App.css";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./store/auth-context";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DashBoardPage from "./Pages/DashBoardPage";
const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home"></Navigate> },
  {
    path: "/home",
    element: <HomePage></HomePage>,
  },
  {
    path: "/dashboard",
    element: <DashBoardPage></DashBoardPage>,
  },
]);
function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="app">
          <Toaster></Toaster>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
