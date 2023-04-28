import { Link } from "react-router-dom";
import { navHeaders } from "../../data/navLinks";

interface NavLinksProps {
  breakpoint: number;
  windowWidth: number;
}

export default function NavLinks(props: NavLinksProps) {
  return (
    <>
      {navHeaders.map((header) => (
        <div
          key={header.name}
          className="flex cursor-pointer h-16 items-center group"
        >
          <div className="flex justify-center items-center pr-5 h-full hover:border-b hover:border-black">
            {props.windowWidth > props.breakpoint ? (
              <>{header.name}</>
            ) : (
              <>{header.name[0]}</>
            )}
          </div>
          {header.submenu && (
            <div className="absolute top-16 left-0 w-full hidden bg-white group-hover:block group-hover:md:block hover:md:block">
              <div className="max-w-[80%] mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-9 gap-0 justify-start">
                  {header.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head}>
                      <div className="text-lg text-black font-semibold">
                        {mysublinks.Head}
                      </div>
                      <ul>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            key={slink.name}
                            className="text-sm text-black my-2.5"
                          >
                            <Link
                              to="placeholder"
                              className="flex items-center pr-5 h-full hover:border-b hover:border-black"
                            >
                              {slink.name}
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
    </>
  );
}
