import React from "react";

type headingprops = {
  children: React.ReactNode;
};
export default function ComponentProp(props: headingprops) {
  return (
    <>
      <h1>hello</h1>

      <h1>{props.children}</h1>
    </>
  );
}
