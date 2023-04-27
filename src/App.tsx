import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Announcementbar from "./components/sections/announcementBar";
import Navbar from "./components/sections/navBar";
import Body from "./components/sections/body";
import Footer from "./components/sections/footer";

function App() {
  return (
    // <Router>
      <div className="">
        {/* <Routes>
          <Route
            path="/"
            element={
              <> */}
                <Announcementbar />
                <Navbar />
                <Body />
                <Footer />
              {/* </>
            }
          />
          <Route path="/comingsoon" element={<></>} />
        </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
