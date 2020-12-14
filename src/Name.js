import React from "react";
import { useStore } from "./makeStore";

import { nameStore } from "./App";

export default function Name() {
  const [name, update] = useStore(nameStore);

  return (
    <div>
      <h2>Name: {name}</h2>
      <input value={name} onChange={(e) => update(e.target.value)} />
    </div>
  );
}
