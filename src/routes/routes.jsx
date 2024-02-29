import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// main layout
import MainLayout from "../layout/MainLayout";
import ErrorPage from "./ErrorPage";
import Loader from "../components/Loader";

// pages (using lazy loading)
const Home = lazy(() => import("../pages/Home/Home"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
