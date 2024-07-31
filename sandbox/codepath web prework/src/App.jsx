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
  // Hu: HomePage functionality is good;
  { path: "showCreators", element: <ShowCreators />},
  // Hu: 
  { path: "addCreator", element: <AddCreator />, action: addAction },
  // Hu: addCreator functionality is good;
  { path: "creators/:creatorId", element: <ViewCreator /> },
  // Hu: add delete option;
  // Hu:
  { path: "creators/:creatorId/edit", element: <EditCreator /> },
  // Hu:
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
