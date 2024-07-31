import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";
import ShowCreators from "./pages/ShowCreators.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import AddCreator from "./pages/AddCreator.jsx";

// Optionally import actions if needed
import { action as addAction } from "./pages/AddCreator.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "showCreators", element: <ShowCreators />},
  { path: "addCreator", element: <AddCreator />, action: addAction },
  { path: "creators/:creatorId", element: <ViewCreator /> },
  { path: "creators/:creatorId/edit", element: <EditCreator /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
