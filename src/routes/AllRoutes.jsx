import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { Projects } from "../components/projects/Projects";
import { TeckStacks } from "../components/teckStacks/TeckStacks";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/#about" element={<About />} />
      <Route path="/#teckstacks" element={<TeckStacks />} />
      <Route path="/#projects" element={<Projects />} />
      <Route path="/#contact" element={<Contact />} />
    </Routes>
  );
};
