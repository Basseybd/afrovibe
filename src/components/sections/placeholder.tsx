import { Link } from "react-router-dom";
import afroVibeCheck from "../../assests/afro_vibe_check.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Placeholder() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-center items-center">
      <Link
        to="/"
        className="text-white font-extrabold text-6xl cursor-pointer p-20"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="pr-6 text-white" />
        Coming soon!
      </Link>
      <img src={afroVibeCheck} alt="afroVibeCheck" className=""></img>
      <div className="text-white">Version 1.0.0</div>
    </div>
  );
}
