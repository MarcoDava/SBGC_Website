import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../Pages/Homepage/Homepage";

const Eventpage = lazy(() => import("../Pages/Eventpage/Eventpage").then((m) => ({ default: m.Eventpage })));
const Contactpage = lazy(() => import("../Pages/Contactpage/Contactpage"));
const Registerpage = lazy(() => import("../Pages/Registerpage/Registerpage"));
const CodeOfEthicsPage = lazy(() => import("../Pages/CodeOfEthicspage/CodeOfEthicspage"));
const AboutUsPage = lazy(() => import("../Pages/AboutUspage/AboutUspage"));
const Memberspage = lazy(() => import("../Pages/Memberspage/Memberspage"));

function PageFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-[#2a1f1f]" aria-busy="true">
      <span className="text-white/60 text-sm">Loading…</span>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      {
        path: "events",
        element: (
          <Suspense fallback={<PageFallback />}>
            <Eventpage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<PageFallback />}>
            <Contactpage />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<PageFallback />}>
            <Registerpage />
          </Suspense>
        ),
      },
      {
        path: "codeofethics",
        element: (
          <Suspense fallback={<PageFallback />}>
            <CodeOfEthicsPage />
          </Suspense>
        ),
      },
      {
        path: "aboutus",
        element: (
          <Suspense fallback={<PageFallback />}>
            <AboutUsPage />
          </Suspense>
        ),
      },
      {
        path: "members",
        element: (
          <Suspense fallback={<PageFallback />}>
            <Memberspage />
          </Suspense>
        ),
      },
    ],
  },
]);