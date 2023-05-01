import { contactUsLinks } from "../../data/contactUsLinks";
import { Link } from "react-router-dom";

interface ContactUsProps {
  windowWidth: number;
}

export default function ContactUs(props: ContactUsProps) {
  return (
    <>
      <div className="bg-black font-small h-96 text-white text-sm items-center pt-16 pb-28 border-b border-white">
        <div className="max-w-[80%] mx-auto flex items-start justify-between">
          <div className="pr-20">
            <div className="mb-4 font-bold text-lg p">Newsletter</div>
            <ul className="space-y-4">
              <li>
                Sign up to be the first to know about drops, special offers and
                more.
              </li>
              <li>I'm interested in:</li>
            </ul>
          </div>
          {props.windowWidth > 700 && (
            <div className="flex grid-cols-4 gap-20">
              {contactUsLinks.map((header) => (
                <div key={header.name}>
                  <div className="mb-4 font-bold">{header.name}</div>
                  <ul className="flex flex-col space-y-4">
                    {header.sublinks.map((sublinks) => (
                      <li key={sublinks.name} className="cursor-pointer">
                        <Link to="placeholder">{sublinks.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
