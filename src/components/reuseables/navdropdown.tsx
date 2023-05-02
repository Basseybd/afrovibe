import { Link } from "react-router-dom";
import { navHeaders } from "../../data/navLinks";

interface NavDropdownProps {
  navHeaders: { [key: string]: any };
}

export default function NavDropdown(props: NavDropdownProps) {
  return (
    <div className="flex flex-row">
      {navHeaders.map((header) => (
        <div
          key={header.header}
          className="flex cursor-pointer h-16 items-center group"
        >
          <div className="flex justify-center items-center pr-5 h-full hover:border-b hover:border-black">
            {header.header}
          </div>
          {header.submenu && (
            <div className="absolute top-16 left-0 w-full hidden bg-white group-hover:block group-hover:md:block hover:md:block">
              <div className="max-w-[80%] mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-9 gap-0 justify-start">
                  {header.subheaderings.map((subheadering) => (
                    <div key={subheadering.subheader}>
                      <div className="text-lg text-black font-semibold">
                        {subheadering.subheader}
                      </div>
                      <ul>
                        {subheadering.sublinks.map((sublink) => (
                          <li
                            key={sublink.name}
                            className="text-sm text-black my-2.5"
                          >
                            <Link
                              to="placeholder"
                              className="flex items-center pr-5 h-full hover:border-b hover:border-black"
                            >
                              {sublink.name}
                            </Link>
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
    </div>
  );
}
