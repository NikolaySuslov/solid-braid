import { MetaProvider, Title } from "@solidjs/meta";
import { Router, Route } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Page from "~/routes/page"
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart - BraidJS</Title>
          <a href="/" target="_self">Index</a>
          <a href="/about" target="_self">About</a>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
       <Route path="/editor" component={Page} />
      <FileRoutes />
    </Router>
  );
}
