import Announcementbar from "./components/sections/announcementBar";
import Navbar from "./components/sections/navBar";
import Body from "./components/sections/body";
import Footer from "./components/sections/footer";
import Placeholder from "./components/sections/placeholder";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Announcementbar />
                <Navbar /> <Body />
                <div className="mb-32"></div>
              </>
            }
          />
          <Route path="/placeholder" element={<Placeholder />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
