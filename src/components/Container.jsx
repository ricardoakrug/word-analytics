import { useState } from "react";
import TextArea from "./container/TextArea";
import Stats from "./container/Stats";

export default function Container() {
  const [text, setText] = useState("");

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats text={text} setText={setText} />
    </main>
  );
}
