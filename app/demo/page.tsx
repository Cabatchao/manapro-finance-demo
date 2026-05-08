import { Card, Badge } from "@/components/ui";
import { DataTable } from "@/components/data-table";
import { invoices, expenses } from "@/lib/demo-data";
import { xpf } from "@/lib/utils";

export default function DemoDashboard(){
 const ca = invoices.reduce((s,i)=>s+i.amount,0), paid=invoices.filter(i=>i.status==='payée').reduce((s,i)=>s+i.amount,0), late=invoices.filter(i=>i.status==='en retard').reduce((s,i)=>s+i.amount,0), exp=expenses.reduce((s,e)=>s+e.amount,0);
 return <div><div className="mb-8 flex flex-wrap items-center justify-between gap-3"><div><Badge>Mode démo</Badge><h1 className="mt-3 text-3xl font-black text-ocean">Dashboard ManaPro</h1><p className="text-slate-600">Vue simplifiée de l’activité en XPF.</p></div></div>
 <div className="grid gap-5 md:grid-cols-4">{[["Facturé",ca],["Encaissé",paid],["En retard",late],["Dépenses",exp]].map(([k,v])=><Card key={k as string}><p className="text-sm text-slate-500">{k}</p><p className="mt-2 text-2xl font-black text-ocean">{xpf(v as number)}</p></Card>)}</div>
 <div className="mt-8 grid gap-6 lg:grid-cols-2"><Card><h2 className="font-bold text-ocean">Alertes du jour</h2><div className="mt-4 space-y-3 text-sm"><p className="rounded-2xl bg-coral/10 p-4 text-coral">Relancer Garage Teva : facture en retard de 76 000 XPF.</p><p className="rounded-2xl bg-sun/10 p-4 text-amber-700">Justificatif manquant : Publicité Facebook.</p><p className="rounded-2xl bg-lagoon/10 p-4 text-lagoon">Préparer export comptable mensuel.</p></div></Card><Card><h2 className="font-bold text-ocean">Prévision 30 jours</h2><p className="mt-4 text-5xl font-black text-ocean">{xpf(ca-exp)}</p><p className="mt-2 text-sm text-slate-500">Estimation simple : facturé - dépenses. Ne remplace pas une comptabilité.</p></Card></div>
 <div className="mt-8"><h2 className="mb-4 text-xl font-bold text-ocean">Dernières factures</h2><DataTable columns={["N°","Client","Montant","Échéance","Statut"]} rows={invoices.map(i=>[i.number,i.customerName,xpf(i.amount),i.dueAt,i.status])}/></div>
 </div>
}
