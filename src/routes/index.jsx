import { Title } from "@solidjs/meta";
import Editor from "~/components/Editor";

export default function Home() {

  return (
    <main>
      <Title>SolidStart BraidJS</Title>
      <h1>SolidStart BraidJS</h1>
      <h3>Collaborative local-first ready text. <a href={window.location.href} target="_blank">Open in new tab</a></h3>
      <Editor id="1" />
      <p>
        Visit{" "}
        <a href="https://github.com/NikolaySuslov/solid-braid" target="_blank">
          SolidStart & BraidJS
        </a>{" "}
        for the source code.
      </p>
    </main>
  );
}
