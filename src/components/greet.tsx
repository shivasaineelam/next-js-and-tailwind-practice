type greetProps = {
  name: string;
  messageCount: number;
  islogged: boolean;
};
export default function Greet(props: greetProps) {
  console.log(props);
  return (
    <>
      hi {props.name}.hellasjlfjawlfjwla iam from sreenidhi {props.messageCount}{" "}
      institute of science and techonology {props.islogged ? "she" : "he"} hello
    </>
  );
}
