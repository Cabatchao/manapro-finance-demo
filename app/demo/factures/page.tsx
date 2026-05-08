import { invoices } from "@/lib/demo-data";
import { xpf } from "@/lib/utils";
import { DataTable } from "@/components/data-table";
import { Badge, Button } from "@/components/ui";
export default function Factures(){return <div><Badge>Facturation</Badge><div className="mb-6 mt-3 flex items-center justify-between"><div><h1 className="text-3xl font-black text-ocean">Factures</h1><p className="text-slate-600">Suivi des factures envoyées, payées ou en retard.</p></div><Button>Nouvelle facture</Button></div><DataTable columns={["N°","Client","Montant","Émise","Échéance","Statut"]} rows={invoices.map(i=>[i.number,i.customerName,xpf(i.amount),i.issuedAt,i.dueAt,i.status])}/></div>}
