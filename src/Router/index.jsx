import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageA } from "../pages/PageA";
import { PageB } from "../pages/PageB";
import PageC from "../pages/PageC";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageC />} path="/pageC" />
        <Route element={<PageB />} path="/pageB" />
        <Route element={<PageA />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
