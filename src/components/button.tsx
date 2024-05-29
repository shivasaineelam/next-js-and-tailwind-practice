"use client";
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export default function ButtonClick(props: ButtonProps) {
  return (
    <button
      className="bg-violet-100 rounded-lg p-3 cursor-pointer"
      onClick={props.handleClick}
    >
      {" "}
      Click Me !!!
    </button>
  );
}
