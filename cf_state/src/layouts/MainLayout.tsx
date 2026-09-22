import { Outlet } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      
      <TopBar />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}