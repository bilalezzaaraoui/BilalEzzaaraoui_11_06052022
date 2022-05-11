import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AllCards from "../../pages/AllCards";
import About from "../../pages/About";
import CardDetail from "../../pages/CardDetail";
import NoteFound from "../../pages/NoteFound";

const RouterKasa = () => {
  return (
    <Routes>
      <Route path="/" element={<AllCards />} />
      <Route path="/details/:id" element={<CardDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<NoteFound />} />
      <Route path="/*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default RouterKasa;
