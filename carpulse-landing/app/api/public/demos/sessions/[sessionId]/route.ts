import { proxyPublicDemos } from "../../_proxy";

type Ctx = { params: Promise<{ sessionId: string }> };

export async function PATCH(req: Request, ctx: Ctx) {
  const { sessionId } = await ctx.params;
  return proxyPublicDemos(req, `/public/demos/sessions/${encodeURIComponent(sessionId)}`, {
    allowMethods: ["PATCH"],
  });
}

export async function DELETE(req: Request, ctx: Ctx) {
  const { sessionId } = await ctx.params;
  return proxyPublicDemos(req, `/public/demos/sessions/${encodeURIComponent(sessionId)}`, {
    allowMethods: ["DELETE"],
  });
}

