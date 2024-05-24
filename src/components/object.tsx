type objecttype = {
  data: {
    name: string;
    age: number;
    ismale: boolean;
    lastname: string;
    firstname: string;
  }[];
  named: string;
};
export default function ObjectName(props: objecttype) {
  console.log("sdfhksk", props.named);
  return (
    <h1 className="text-4xl">
      <h1>{props.named}</h1>
      {props.data &&
        props.data.map((item) => {
          return (
            <>
              {item.age}
              {item.firstname}
              {item.ismale}
              {item.lastname}
              {item.name}
            </>
          );
        })}
      {/* {props.data[0].age}
      {props.data[0].firstname}
      {props.data[0].ismale}
      {props.data[0].lastname}
      {props.data[0].name} */}
    </h1>
  );
}
