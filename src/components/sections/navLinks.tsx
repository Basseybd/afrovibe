import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { navHeaders } from "../../data/navLinks";

export default function NavLinks() {
  return (
    <Router>
      <>
        {navHeaders.map((header) => (
          <div className="flex cursor-pointer h-16 items-center group">
            <div className="pr-5 hover:underline">{header.name}</div>
            {header.submenu && (
              <div className="absolute top-16 left-4 w-full hidden bg-white group-hover:block group-hover:md:block hover:md:block">
                <div className="container mx-auto">
                  <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-0 justify-start">
                    {header.sublinks.map((mysublinks) => (
                      <div>
                        <div className="text-lg text-black font-semibold">
                          {mysublinks.Head}
                        </div>
                        <ul>
                          {mysublinks.sublink.map((slink) => (
                            <li className="text-sm text-black my-2.5">
                              <Routes>
                                <Route
                                  path="/"
                                  element={
                                    <div className="hover:text-primary hover:underline">
                                      {slink.name}
                                    </div>
                                  }
                                ></Route>
                                <Route path={slink.link} element={<></>} />
                              </Routes>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </>
    </Router>
  );
}
