import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
