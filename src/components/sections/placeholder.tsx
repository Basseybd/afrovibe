import { Link } from "react-router-dom";
import afroVibeCheck from "../../assests/afro_vibe_check.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function Placeholder() {
  return (
    <div className="relative text-white w-full h-full bg-black flex flex-col justify-center items-center pb-60">
      <div className="ont-extrabold text-3xl p-20">Coming soon!</div>
      <Link to="/">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="hover:text-blue-500 text-3xl"
        />
      </Link>
      <img src={afroVibeCheck} alt="afroVibeCheck" />
      <div>Version 1.0.0</div>
    </div>
  );
}
