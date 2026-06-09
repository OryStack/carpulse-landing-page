export type PlanApiItem = {
    id: string;
    name: string;
    description: string;
    price: string;
    max_deals_per_month?: number;
    kind?: string;
    is_active?: boolean;
  };
  
  export async function fetchPublicPlans(): Promise<PlanApiItem[]> {
    const base = process.env.CARPULSE_CLIENT_API;
  
    if (!base) {
      throw new Error("API base URL manquante");
    }
  
    const res = await fetch(`${base}/plans`, {
      method: "GET",
      cache: "no-store", // important pour data live
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!res.ok) {
      throw new Error("Erreur lors du chargement des plans");
    }
  
    const data = await res.json();
  
    // adapte selon ton API réelle
    return data.results ?? data;
  }