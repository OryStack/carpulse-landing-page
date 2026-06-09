import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_CARPULSE_CLIENT_API;
    const res = await fetch(`${BASE_URL}users/sectors`);

    if (!res.ok) {
      return NextResponse.json({ error: 'Erreur backend' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}