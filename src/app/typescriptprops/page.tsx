"use client";
import ButtonClick from "@/components/button";
import ComponentProp from "@/components/componentprop";
import CssProp from "@/components/cssstyle";
import Greet from "@/components/greet";
import Input from "@/components/input";
import { eventNames } from "process";

export default function TypeScriptProps() {
  const advancedObjectProp = {
    telugu: 10,
    hindi: 20,
    maths: 90,
    physics: 70,
    social: 60,
  };
  const f = (event: React.MouseEvent) => {
    console.log("button clicked", event);
  };

  return (
    <>
      <Greet
        name="shiva sai neelam"
        messageCount={12}
        islogged={true}
        advancedprop={advancedObjectProp}
      />
      <ComponentProp>
        <>world</>
      </ComponentProp>
      <ButtonClick handleClick={f} />
      <Input
        value=""
        handleChange={(event: React.ChangeEvent) => console.log(event)}
      />
      <CssProp
        styles={{
          backgroundColor: "yellow",
          padding: "34px",
          border: "4mm ridge rgba(211, 220, 50, .6)",
        }}
      />
    </>
  );
}
