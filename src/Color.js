import React from "react";
import { useSliceOfStore } from "./makeStore";

import { formStore } from "./App";

export default function Color() {
  const [color, update] = useSliceOfStore(formStore, "color");

  return (
    <div>
      <h2>Color: {color}</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => update(e.target.value)}
      />
    </div>
  );
}
