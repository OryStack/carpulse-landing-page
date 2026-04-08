function getBaseUrl() {
  const raw = process.env.CARPULSE_CLIENT_API ?? "";
  return raw.replace(/\/+$/, "");
}

function jsonError(status: number, message: string, extra?: unknown) {
  const extras =
    extra && typeof extra === "object" && !Array.isArray(extra)
      ? (extra as Record<string, unknown>)
      : undefined;
  return Response.json({ error: message, ...(extras ?? {}) }, { status });
}

async function readJsonSafe(res: Response): Promise<unknown> {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function proxyPublicDemos(
  req: Request,
  targetPath: string,
  opts?: { allowMethods?: Array<"GET" | "POST" | "PATCH" | "DELETE"> },
) {
  const baseUrl = getBaseUrl();
  if (!baseUrl) {
    return jsonError(
      500,
      'Variable d’environnement manquante: CARPULSE_CLIENT_API',
    );
  }

  const method = req.method.toUpperCase() as "GET" | "POST" | "PATCH" | "DELETE";
  const allow = opts?.allowMethods ?? ["GET"];
  if (!allow.includes(method)) {
    return jsonError(405, "Méthode non autorisée.");
  }

  const incomingUrl = new URL(req.url);
  const targetUrl = new URL(`${baseUrl}${targetPath}`);
  targetUrl.search = incomingUrl.search; // forward querystring

  const headers = new Headers();
  headers.set("accept", "application/json");
  // On proxifie du JSON (et on forward le Content-Type si présent)
  const ct = req.headers.get("content-type");
  if (ct) headers.set("content-type", ct);

  let body: string | undefined;
  if (method !== "GET" && method !== "DELETE") {
    body = await req.text();
  }

  let upstream: Response;
  try {
    upstream = await fetch(targetUrl, {
      method,
      headers,
      body,
      // Important: éviter de mettre en cache les disponibilités
      cache: "no-store",
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return jsonError(502, "Impossible de joindre l’API CarPulse.", { detail: msg });
  }

  const raw = await readJsonSafe(upstream);
  if (!upstream.ok) {
    const status = upstream.status || 502;
    // On renvoie quelque chose de stable côté client
    const message =
      typeof raw === "string"
        ? raw
        : raw && typeof raw === "object" && "error" in (raw as any)
          ? String((raw as any).error)
          : "Erreur API.";
    return jsonError(status, message, { upstream: raw });
  }

  // Retourner le corps tel quel (JSON ou texte JSONifiable)
  return Response.json(raw, {
    status: upstream.status,
    headers: {
      // simplifie les appels fetch côté client
      "Cache-Control": "no-store",
    },
  });
}

