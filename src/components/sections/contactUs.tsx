import { contactUsLinks } from "../../data/contactUsLinks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function ContactUs() {
  return (
    <Router>
      <>
        <div className="bg-black font-small h-96 text-white text-sm items-center mt-32 pt-16 pb-28 border-b border-white">
          <div className="max-w-[80%] mx-auto flex items-start justify-between">
            <div>
              <div className="mb-4 font-bold text-lg">Newsletter</div>
              <ul className="space-y-4">
                <li>
                  Sign up to be the first to know about drops, special offers
                  and more.
                </li>
                <li>I'm interested in:</li>
              </ul>
            </div>
            <div className="flex grid-cols-4 gap-44">
              {contactUsLinks.map((header) => (
                <div>
                  <div className="mb-4 font-bold">{header.name}</div>
                  <ul className="flex flex-col space-y-4">
                    {header.sublinks.map((sublinks) => (
                      <li className="cursor-pointer">
                        <Routes>
                          <Route
                            path="/"
                            element={<div>{sublinks.name}</div>}
                          ></Route>
                          <Route path={sublinks.link} element={<></>} />
                        </Routes>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </Router>
  );
}
