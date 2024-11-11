import { createMiddleware } from "@solidjs/start/middleware";
import { http_server } from 'braid-http'
import braid_text from '~/lib/braid-text/index.js'
import { free_the_cors } from "~/lib/utils.js";

const handler = async (req, res) => {

  if (req.url.includes('/api/braid-text/')) {
    console.log("Req: ", req.url, " - ", req.method)

    free_the_cors(req, res)
    if (req.method === 'OPTIONS') return

    await braid_text.serve(req, res)
  }
}

export default createMiddleware({
  onRequest: [
    event => {
      let req = event.nativeEvent.node.req
      let res = event.nativeEvent.node.res
      handler(req, res)
    }
  ]
  // onBeforeResponse: [
  //   (event, { body }) => {}
  // ]
});