import Announcementbar from "./components/announcementbar";
import Navbar from "./components/navbar";
import Newcollaboration from "./components/newcollaboration";

function App() {
  return (
    <div className="text-white bg-black body-font">
      <Announcementbar />
      <Navbar  />
      <Newcollaboration />
    </div>
  );
}

export default App;
