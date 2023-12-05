import { Routes, Route, Navigate } from "react-router-dom";

import Preview from "./pages/Preview";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Creator from "./pages/Creator";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/Global/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/preview?category=hoverType" />}
        />
        <Route path="/preview" element={<Preview />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs">
          <Route index element={<Navigate replace to="installation" />} />
          <Route path="installation" element={<Docs />} />
          <Route path="usage" element={<Docs />} />
        </Route>
        <Route path="/creator" element={<Creator />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
