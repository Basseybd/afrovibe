import Announcementbar from "./components/sections/announcementBar";
import Navbar from "./components/sections/navBar";
import Body from "./components/sections/body";
import Footer from "./components/sections/footer";
import Placeholder from "./components/sections/placeholder";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


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
                <Announcementbar windowWidth={windowWidth} />
                <Navbar windowWidth={windowWidth} /> <Body />
                <div className="mb-32"></div>
              </>
            }
          />
          <Route path="/placeholder" element={<Placeholder />} />
        </Routes>
        <Footer windowWidth={windowWidth} />
      </div>
    </Router>
  );
}

export default App;
