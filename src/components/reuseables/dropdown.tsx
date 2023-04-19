interface dropdownProps {
  isDropdownOpen: boolean;
  array: {
    name: string;
  }[];
  handleClick: (clickedOption: string) => void;
}

export default function dropdown(props: dropdownProps) {
  return <div></div>;
}
