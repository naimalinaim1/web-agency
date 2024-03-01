import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="bg-[#13072E] min-h-screen">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
