// app/api/checkout/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_CARPULSE_CLIENT_API;
    const body = await request.json();

    const cleanBaseUrl = BASE_URL?.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
    const targetUrl = `${cleanBaseUrl}public/clients`;

    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorText = await res.text();
      
      // 1. Log de l'erreur brute dans ton terminal Node.js pour le dev
      console.error(`❌ [Erreur Backend CarPulse] Statut ${res.status} :`, errorText);

      // 2. Tenter de récupérer le message précis pour l'envoyer au navigateur
      try {
        const errorData = JSON.parse(errorText);
        // Gère les formats classiques d'erreurs (error, message, ou detail pour FastAPI/Python)
        const extractedError = errorData.error || errorData.message || errorData.detail || 'Erreur de validation backend';
        return NextResponse.json({ error: extractedError }, { status: res.status });
      } catch {
        return NextResponse.json({ error: 'Erreur brute du serveur' }, { status: res.status });
      }
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('❌ [Erreur Proxy Serveur] :', error);
    return NextResponse.json({ error: 'Erreur serveur interne' }, { status: 500 });
  }
}