import { quotes } from "@/lib/demo-data";
import { xpf } from "@/lib/utils";
import { DataTable } from "@/components/data-table";
import { Badge, Button } from "@/components/ui";
export default function Devis(){return <div><Badge>Devis en XPF</Badge><div className="mb-6 mt-3 flex items-center justify-between"><div><h1 className="text-3xl font-black text-ocean">Devis</h1><p className="text-slate-600">Créer, envoyer puis transformer en facture.</p></div><Button>Nouveau devis</Button></div><DataTable columns={["N°","Client","Montant","Date","Statut"]} rows={quotes.map(q=>[q.number,q.customerName,xpf(q.amount),q.date,q.status])}/></div>}
