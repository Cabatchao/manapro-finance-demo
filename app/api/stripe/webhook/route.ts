import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request){
  if(!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) return NextResponse.json({ received: false }, { status: 400 });
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" as any });
  const sig = req.headers.get("stripe-signature");
  const raw = await req.text();
  try{
    const event = stripe.webhooks.constructEvent(raw, sig || "", process.env.STRIPE_WEBHOOK_SECRET);
    return NextResponse.json({ received: true, type: event.type });
  }catch(e:any){ return NextResponse.json({ error: e.message }, { status: 400 }); }
}
