import Navbar from "./components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import { AboutsPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import ProjectDetails from "./pages/ProjectDetails";
import BlogDetails from "./pages/BlogDetails";

export default function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/about" element={<AboutsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}