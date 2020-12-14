import React from "react";
import { useSliceOfStore } from "./makeStore";

import { formStore } from "./App";

export default function Title() {
  const [color] = useSliceOfStore(formStore, "color");

  return (
    <h1 style={{ color }}>
      <span role="img" aria-label="box">
        📦
      </span>
      {" react-make-store"}
    </h1>
  );
}
