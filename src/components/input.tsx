"use client";
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Input(props: InputProps) {
  return (
    <>
      <input
        className="border-4 border-black p-4 text-black"
        type="text"
        value={props.value}
        onChange={props.handleChange}
      />
    </>
  );
}
