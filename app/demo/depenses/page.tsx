import { expenses } from "@/lib/demo-data";
import { xpf } from "@/lib/utils";
import { DataTable } from "@/components/data-table";
import { Badge, Button } from "@/components/ui";
export default function Depenses(){return <div><Badge>Dépenses</Badge><div className="mb-6 mt-3 flex items-center justify-between"><div><h1 className="text-3xl font-black text-ocean">Dépenses</h1><p className="text-slate-600">Catégories, fournisseurs et justificatifs.</p></div><Button>Ajouter une dépense</Button></div><DataTable columns={["Libellé","Catégorie","Fournisseur","Montant","Date","Justificatif"]} rows={expenses.map(e=>[e.label,e.category,e.supplier,xpf(e.amount),e.date,e.receipt])}/></div>}
