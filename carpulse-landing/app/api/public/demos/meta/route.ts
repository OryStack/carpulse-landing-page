import { proxyPublicDemos } from "../_proxy";

export async function GET(req: Request) {
  return proxyPublicDemos(req, "/public/demos/meta", { allowMethods: ["GET"] });
}

