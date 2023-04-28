import CopyRightBar from "./copyRightBar";
import ContactUs from "./contactUs";

export default function Footer() {


  return (
    <div className="bg-black h-9 font-small text-white text-sm items-center">
      <ContactUs />
      <CopyRightBar />
    </div>
  );
}
