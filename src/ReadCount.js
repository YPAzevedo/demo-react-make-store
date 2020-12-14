import React from "react";
import { useStore } from "./makeStore";

import { countStore } from "./App";

export default function ReadCount() {
  const [count] = useStore(countStore);

  return (
    <div>
      <strong>Read Count: </strong>
      <strong>{count}</strong>
    </div>
  );
}
