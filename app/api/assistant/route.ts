import { NextResponse } from "next/server";
import OpenAI from "openai";

function fallback(question: string, data: any){
  const invoices = data?.invoices || []; const expenses = data?.expenses || [];
  const due = invoices.filter((i:any)=> i.status === 'en retard');
  const unpaid = invoices.filter((i:any)=> i.status !== 'payée');
  const totalDue = unpaid.reduce((s:number,i:any)=>s+i.amount,0);
  const maxExpense = [...expenses].sort((a:any,b:any)=>b.amount-a.amount)[0];
  const q = question.toLowerCase();
  if(q.includes('relancer')) return due.length ? `À relancer avec les données disponibles :\n${due.map((i:any)=>`- ${i.customerName} pour ${i.number}, montant ${i.amount.toLocaleString('fr-FR')} XPF, échéance ${i.dueAt}`).join('\n')}` : "Aucune facture en retard dans les données disponibles.";
  if(q.includes('doivent') || q.includes('combien')) return `Avec les données disponibles, les clients doivent encore ${totalDue.toLocaleString('fr-FR')} XPF. Ce total additionne les factures non payées.`;
  if(q.includes('grosse dépense') || q.includes('plus grosse')) return maxExpense ? `La plus grosse dépense disponible est : ${maxExpense.label}, ${maxExpense.amount.toLocaleString('fr-FR')} XPF, catégorie ${maxExpense.category}.` : "Aucune dépense disponible.";
  if(q.includes('comptable')) return "À envoyer au comptable avec les données disponibles : factures du mois, dépenses, justificatifs ajoutés et liste des justificatifs manquants.";
  return "Je ne peux pas conclure avec certitude à partir des données disponibles. Reformule ta question sur les factures, dépenses, clients ou exports.";
}

export async function POST(req: Request){
  const body = await req.json();
  const question = body.question || "";
  const data = body.data || {};
  if(!process.env.OPENAI_API_KEY){ return NextResponse.json({ answer: fallback(question, data), mode: "fallback" }); }
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
    messages: [
      { role: "system", content: "Tu es l'assistant ManaPro Finance. Réponds en français simple. Tu ne dois jamais inventer. Tu réponds uniquement à partir des données JSON fournies. Si une donnée manque, dis-le. Les montants sont en XPF." },
      { role: "user", content: JSON.stringify({ question, data }) }
    ],
    temperature: 0.2
  });
  return NextResponse.json({ answer: completion.choices[0]?.message?.content || "Je ne peux pas répondre avec les données disponibles." });
}
