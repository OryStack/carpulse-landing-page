import { proxyPublicDemos } from "../_proxy";

export async function GET(req: Request) {
  return proxyPublicDemos(req, "/public/demos/availability", { allowMethods: ["GET"] });
}

