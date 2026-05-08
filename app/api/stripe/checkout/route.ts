import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request){
  if(!process.env.STRIPE_SECRET_KEY) return NextResponse.json({ error: "Stripe non configuré" }, { status: 400 });
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" as any });
  const { plan } = await req.json();
  const prices: Record<string,string|undefined> = { fenua: process.env.STRIPE_PRICE_FENUA, mana: process.env.STRIPE_PRICE_MANA, tiare: process.env.STRIPE_PRICE_TIARE };
  const price = prices[plan];
  if(!price) return NextResponse.json({ error: "Plan inconnu" }, { status: 400 });
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/demo?success=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/#offres`
  });
  return NextResponse.json({ url: session.url });
}
