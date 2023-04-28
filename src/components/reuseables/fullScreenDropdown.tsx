interface fullScreenDropdownProps {
  isDropdownOpen: boolean;
  array: {
    name: string;
    svg?: JSX.Element;
  }[];
  handleClick: (clickedOption: string) => void;
  position?: string;
  textstyling?: string;
  bgColor?: string;
}

export default function FullScreenDropdown(props: fullScreenDropdownProps) {
  return (
    <div
      className={`${
        props.isDropdownOpen ? "block" : "hidden"
      }  relative z-50 h-16  flex items-center ${
        props.bgColor
      } divide-gray-100`}
    >
      <div className={`flex max-w-[80%] w-full mx-auto  ${props.position}`}>
        <ul className="font-medium flex flex-row flex-wrap" role="none">
          {props.array.map((element) => (
            <li key={element.name}>
              <button
                className={`block px-4 py-2 text-sm ${props.textstyling}`}
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
