import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";

const MainLayout = () => {
  return (
    <>
      <div className="bg-[#13072E] min-h-screen">
        <Header />
        <main>
          <Outlet />
        </main>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default MainLayout;
