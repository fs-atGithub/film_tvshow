import React from "react";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Layout />
      <Outlet />
    </div>
  );
};

export default App;
