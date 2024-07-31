import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";
import ShowCreators from "./pages/ShowCreators.jsx";
import EditCreator from "./pages/EditCreator.jsx";
import AddCreator from "./pages/AddCreator.jsx";

// import {action as addAction } from "./pages/AddCreator.jsx";

const AppRoutes = () => {
  console.log("Root component is rendering");

  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "showCreators", element: <ShowCreators /> },
    { path: "addCreator", element: <AddCreator />},
    { path: "creators/:creatorId", element: <ViewCreator /> },
    { path: "creators/:creatorId/edit", element: <EditCreator /> },
  ];

  return useRoutes(routes);
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
