import { Title } from "@solidjs/meta";
import { useParams, useSearchParams } from "@solidjs/router";
import Editor from "~/components/Editor";

export default function Page() {

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <main>
      <Title>Editor</Title>
      <h1>Editor {searchParams.k}</h1>
      <a href={window.location.href} target="_blank">Open in new tab</a>
      <Editor id={searchParams.k} />
    </main>
  );
}
