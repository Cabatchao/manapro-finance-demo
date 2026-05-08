export type Customer = { id: string; name: string; email: string; phone?: string; island: string; status: "bon payeur" | "retard fréquent" | "nouveau" };
export type Invoice = { id: string; number: string; customerId: string; customerName: string; amount: number; issuedAt: string; dueAt: string; status: "payée" | "envoyée" | "en retard" | "partielle" };
export type Expense = { id: string; label: string; category: string; supplier: string; amount: number; date: string; receipt: "manquant" | "ajouté" | "validé" };
export type Quote = { id: string; number: string; customerName: string; amount: number; status: "brouillon" | "envoyé" | "accepté" | "refusé"; date: string };

export const customers: Customer[] = [
  { id: "c1", name: "Pension Moana", email: "contact@pension-moana.pf", phone: "+689 87 00 00 01", island: "Tahiti", status: "bon payeur" },
  { id: "c2", name: "Garage Teva", email: "admin@garage-teva.pf", phone: "+689 87 00 00 02", island: "Tahiti", status: "retard fréquent" },
  { id: "c3", name: "Roulotte Arii", email: "arii@example.pf", phone: "+689 87 00 00 03", island: "Moorea", status: "nouveau" }
];

export const invoices: Invoice[] = [
  { id: "i1", number: "FAC-2026-001", customerId: "c1", customerName: "Pension Moana", amount: 128000, issuedAt: "2026-05-01", dueAt: "2026-05-15", status: "envoyée" },
  { id: "i2", number: "FAC-2026-002", customerId: "c2", customerName: "Garage Teva", amount: 76000, issuedAt: "2026-04-10", dueAt: "2026-04-25", status: "en retard" },
  { id: "i3", number: "FAC-2026-003", customerId: "c3", customerName: "Roulotte Arii", amount: 45000, issuedAt: "2026-05-03", dueAt: "2026-05-10", status: "payée" }
];

export const expenses: Expense[] = [
  { id: "e1", label: "Carburant livraison", category: "carburant", supplier: "Station Punaauia", amount: 12600, date: "2026-05-02", receipt: "ajouté" },
  { id: "e2", label: "Achat matériel", category: "matériel", supplier: "Quincaillerie", amount: 38900, date: "2026-05-04", receipt: "validé" },
  { id: "e3", label: "Publicité Facebook", category: "communication", supplier: "Meta", amount: 15000, date: "2026-05-06", receipt: "manquant" }
];

export const quotes: Quote[] = [
  { id: "q1", number: "DEV-2026-001", customerName: "Pension Moana", amount: 185000, status: "accepté", date: "2026-04-28" },
  { id: "q2", number: "DEV-2026-002", customerName: "Roulotte Arii", amount: 69000, status: "envoyé", date: "2026-05-05" }
];

export const plans = [
  { name: "Fenua Starter", price: "2 900 XPF", target: "Patentés, freelances, petits prestataires", features: ["Devis & factures illimités", "Suivi paiements", "Relances manuelles", "Export PDF", "1 utilisateur"] },
  { name: "Mana Pro", price: "6 900 XPF", target: "Artisans, commerces, pensions, prestataires touristiques", features: ["Relances automatiques", "Scan justificatifs", "Export comptable", "Prévision 30 jours", "3 utilisateurs"], popular: true },
  { name: "Tiare Business", price: "14 900 XPF", target: "PME, BTP, multi-activités", features: ["Multi-utilisateurs", "Validation dépenses", "Rapports mensuels", "Alertes trésorerie", "Support prioritaire"] }
];
