import Counter from "@/components/counterusereduce";
import { obj } from "@/components/f1";
import LoggedInuser from "@/components/loggedinuser";
import { createContext } from "vm";

export const ThemeContext = createContext(obj);

export default function TypeScriptHook() {
  return (
    <h1>
      <ThemeContext.Provider value={obj}>
        <LoggedInuser />
        <Counter />
      </ThemeContext.Provider>
    </h1>
  );
}
