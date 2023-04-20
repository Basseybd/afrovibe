interface ButtonProps {
  name: string;
  action: string;
  reverse: boolean;
  bgColor: string;
  textColor?: string;
  height?: string;
  width?: string;
  padding?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <div>
      {props.reverse ? (
        <button
          className={` ${props.textColor} ${props.bgColor} ${props.height} ${props.width
          } ${props.padding} relative outline outline-2 flex items-center justify-center rounded-full px-3 text-sm font-medium ${
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
