# Towards local-first sync engine SDK based on SolidStart & BraidJS

The big idea of SolidStart & BraidJS SDK is to provide the instrumentation for the SolidJS applications state synchronization across network using Braid-HTTP protocol middleware on top of SolidStart fullstack platform. Since SolidJS signals and memos form a DAG (directed acyclic graph, aka dependency graph), choosing BraidJS that also operates on terms of Time and Space DAGs and being local-first, seems to be the most suitable solution. One of the uniqueness of using Braid is that it uses the standard HTTP protocol instead of Websockets for the state sync.

## What functions does SDK provide right now?

During SolidHack 2024 competition I have got running the Braid-HTTP and Braid-Text with Simpleton client on top of SolidStart. The included example shows how a collaborative text editor as a component is working in any SolidJS app. The Braid-HTTP extension is loaded from the official npm repository without modifications. Braid-Text extension and Simpleton are modified to suit SolidStart framework.

![](/public/demo.gif)

To run the demo:

1. Clone this repo: ```git clone ```
2. Start the SoliStart local server with ```npm run dev```
3. Open web browser with an url: http://localhost:3000
4. Open another instance of web browser with the same url
5. In the textarea enter any text and observe it's syncronization


## What is Braid?

[Braid](https://braid.org/) is developed by an open working group creating algorithms, applications, tools, and standards for interoperable state synchronization. The goal of Braid is to be able to read & write distributed state as easily as a local variable, collaboratively across all the networked computing systems we use.

In it's implementation a "Braid" is a mathematical structure that contains the information of both a Time DAG and a Space DAG. If you ignore space, you get a Time DAG. And if you collapse time, you get a Space DAG. [Interactive explanation](https://braid.org/demo/interact)

Concretely, a Braid is composed of three objects:
- Versions define points in time, irrespective of space
- Locations define points of space, irrespective of time
- Patches replace regions of space, across spans of time

Braid extensions provide collaborative editing, a serverless offline mode, and peer-to-peer networking for any HTTP resource.

[Braid-HTTP](https://github.com/braid-org/braid-http) - is an extension to HTTP that generalizes it from a state transfer to a state synchronization protocol.
It adds these features to HTTP:

- Versioning to HTTP resources
- Subscriptions to GET requests
- Patches to Range Requests
- Merge-Types to specify OT or CRDT behavior

[Braid-Text and json range patch support](https://github.com/braid-org/braid-text) - provides a simple http route handler, along with client code, enabling fast text synchronization over a standard protocol. This extension makes it safe, easy & efficient to add collaborative text editing to every user-editable string

Together, these features enable a web resource to synchronize automatically across multiple clients, servers and proxies, and support arbitrary simultaneous edits by multiple writers, under arbitrary network delays and partitions, while guaranteeing consistency using an OT, CRDT, or other algorithm.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

This project was created with the [Solid CLI](https://solid-cli.netlify.app)

## Contributing & License

MIT license


