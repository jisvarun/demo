import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import OurWork from "../pages/OurWork";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Our Work */}
        <Route path="/our-work" element={<OurWork />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* FAQ */}
        <Route path="/faq" element={<FAQ />} />

        {/* Keep unsupported links from rendering a blank page. */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}