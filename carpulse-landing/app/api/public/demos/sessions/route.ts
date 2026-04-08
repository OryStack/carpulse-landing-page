import { proxyPublicDemos } from "../_proxy";

export async function GET(req: Request) {
  return proxyPublicDemos(req, "/public/demos/sessions", { allowMethods: ["GET"] });
}

export async function POST(req: Request) {
  return proxyPublicDemos(req, "/public/demos/sessions", { allowMethods: ["POST"] });
}

