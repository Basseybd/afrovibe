import Announcementbar from "./components/sections/announcementBar";
import Navbar from "./components/sections/navBar";
import Body from "./components/sections/body";
import Footer from "./components/sections/footer";
import Placeholder from "./components/sections/placeholder";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 768; // screen size below which language buttons won't be shown

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <Router>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Announcementbar
                  breakpoint={breakpoint}
                  windowWidth={windowWidth}
                />
                <Navbar breakpoint={breakpoint} windowWidth={windowWidth} />{" "}
                <Body />
                <div className="mb-32"></div>
              </>
            }
          />
          <Route path="/placeholder" element={<Placeholder />} />
        </Routes>
        <Footer breakpoint={breakpoint} windowWidth={windowWidth} />
      </div>
    </Router>
  );
}

export default App;
