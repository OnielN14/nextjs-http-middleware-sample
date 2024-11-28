import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export default  async function handler(req: NextApiRequest, res: NextApiResponse) {
    httpProxyMiddleware(req, res, {
        target:"https://cors-server.digi.ninja",
        pathRewrite: [
            {
                patternStr: "^/api/",
                replaceStr: ""
            }
        ]
    })
}