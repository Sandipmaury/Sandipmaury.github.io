import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContactPage } from "./ContactPage";
import HomePage from "./HomePage";
import { ProjectPage } from "./ProjectPage";
import { SkillPage } from "./SkillPage";
import { TeckStackPage } from "./TeckStackPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teckstacks" element={<TeckStackPage />} />
      <Route path="/skills" element={<SkillPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
