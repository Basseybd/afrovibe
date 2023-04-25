interface fullScreenDropdownProps {
  isDropdownOpen: boolean;
  array: {
    name: string;
    svg?: JSX.Element;
  }[];
  handleClick: (clickedOption: string) => void;
}

export default function FullScreenDropdown(props: fullScreenDropdownProps) {
  return (
    <div
      className={`${
        props.isDropdownOpen ? "block" : "hidden"
      }  relative z-50 h-16  flex items-center bg-white divide-gray-100`}
    >
      <div className="max-w-[80%] w-full mx-auto justify-end flex">
        <ul className="font-medium flex flex-row flex-wrap" role="none">
          {props.array.map((element) => ( 
            <li>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => props.handleClick(element.name)}
              >
                <div className="inline-flex items-center">
                  {element.svg}
                  {element.name}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
