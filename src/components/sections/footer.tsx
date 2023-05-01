import CopyRightBar from "./copyRightBar";
import ContactUs from "./contactUs";

interface FooterProps {
  windowWidth: number;
}

export default function Footer(props: FooterProps) {
  return (
    <div className="bg-black h-9 font-small text-white text-sm items-center">
      <ContactUs windowWidth={props.windowWidth} />
      <CopyRightBar windowWidth={props.windowWidth} />
    </div>
  );
}
