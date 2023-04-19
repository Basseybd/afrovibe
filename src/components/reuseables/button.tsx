interface ButtonProps {
  name: string;
  action: string;
  reverse: boolean;
  bgColor: string;
  textColor?: string;
  hieght?: string;
  width?: string;
  padding?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <div>
      {props.reverse ? (
        <button
          className={`relative outline outline-1 ${props.textColor} ${
            props.bgColor
          } ${props.hieght} ${props.width} ${
            props.padding
          } flex items-center justify-center outline outline-2 rounded-full px-3 text-sm font-medium ${
            props.bgColor === "bg-transparent"
              ? "hover:bg-white"
              : "hover:bg-black hover:text-white hover:outline-0"
          }`}
        >
          {props.name}
        </button>
      ) : (
        <button className="pr-5 hover:underline"> {props.name} </button>
      )}
    </div>
  );
}
