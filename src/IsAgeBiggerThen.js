import React from "react";
import { useDeriveFromSlice } from "react-make-store";

import { formStore } from "./App";

export default function IsAgeBiggerThen({ value, ...props }) {
  const [isAgeBigger] = useDeriveFromSlice(
    formStore,
    "age",
    (age) => age > value
  );

  return (
    <span {...props}>{`Is age bigger then ${value}: ${String(
      isAgeBigger
    )}`}</span>
  );
}
