import React from "react";
import makeStore from "./makeStore";

import Age from "./Age";
import Name from "./Name";
import Color from "./Color";
import Count from "./Count";
import ReadCount from "./ReadCount";
import Title from "./Title";

import "./styles.css";
import IsAgeBiggerThen from "./IsAgeBiggerThen";

const store = makeStore();

export const countStore = store.create("count", 0);
export const nameStore = store.create("name", "Anonymous");
export const formStore = store.create("form", { age: 0, color: "#8454f2" });

// Updates from outside React
setTimeout(() => {
  countStore.update(30);
  formStore.update((form) => ({ ...form, age: 120 }));
}, 3000);

export default function App() {
  return (
    <div className="App">
      <Title />
      <Count />
      <ReadCount />
      <Name />
      <Color />
      <Age />
      <IsAgeBiggerThen value={50} />
    </div>
  );
}
