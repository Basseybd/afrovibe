import CopyRightBar from "./copyRightBar";
import ContactUs from "./contactUs";

interface FooterProps {
  breakpoint: number;
  windowWidth: number;
}

export default function Footer(props: FooterProps) {
  return (
    <div className="bg-black h-9 font-small text-white text-sm items-center">
      <ContactUs
        breakpoint={props.breakpoint}
        windowWidth={props.windowWidth}
      />
      <CopyRightBar />
    </div>
  );
}
