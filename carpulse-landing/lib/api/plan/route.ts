import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_CARPULSE_API_BASE_URL;

export async function GET() {
  if (!BASE_URL) {
    return NextResponse.json(
      { error: 'Missing API base URL' },
      { status: 500 }
    );
  }

  const url = new URL('plans', BASE_URL);

  url.searchParams.set('page', '1');
  url.searchParams.set('page_size', '20');
  url.searchParams.set('status', 'active');
  url.searchParams.set('type', 'all');
  url.searchParams.set('sort_by', 'price');
  url.searchParams.set('sort_order', 'asc');

  const res = await fetch(url.toString(), {
    // cache côté server uniquement
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch plans' },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json(data);
}