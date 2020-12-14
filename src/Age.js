import React from "react";
import { useSliceOfStore } from "react-make-store";

import { formStore } from "./App";

export default function Age() {
  const [age, update] = useSliceOfStore(formStore, "age");

  return (
    <div>
      <h2>Age: {age}</h2>
      <input
        type="number"
        value={age}
        onChange={(e) => update(e.target.value)}
      />
    </div>
  );
}
