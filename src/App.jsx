import "./App.css";
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
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
