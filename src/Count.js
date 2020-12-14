import React from "react";
import { useStore } from "react-make-store";

import { countStore } from "./App";

export default function Count() {
  const [count, update] = useStore(countStore);

  return (
    <div>
      <h2>Count: </h2>
      <h3>{count}</h3>
      <button onClick={() => update((c) => c - 1)}>-</button>
      <button onClick={() => update((c) => c + 1)}>+</button>
    </div>
  );
}
