import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="create" element={<Create />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
