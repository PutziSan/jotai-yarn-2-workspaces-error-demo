import React from "react";
import {useAtom} from "jotai";
import {countAtom} from "./atoms";

export function Example() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>one up</button>
    </div>
  );
}
