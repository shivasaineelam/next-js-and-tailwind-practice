"use client";
type greetProps = {
  name: string;
  messageCount: number;
  islogged: boolean;
  advancedprop: {
    telugu: number;
    hindi: number;
    maths: number;
    physics: number;
    social: number;
  };
};
export default function Greet(props: greetProps) {
  console.log(props);
  return (
    <>
      hi {props.name}. you have {props.messageCount} unread messages your marks
      are <h1>{props.advancedprop.telugu}</h1>
      <h1> {props.advancedprop.maths}</h1>
      <h1> {props.advancedprop.physics}</h1>
      <h1> {props.advancedprop.social}</h1>
      <h1> {props.advancedprop.hindi}</h1>
    </>
  );
}
