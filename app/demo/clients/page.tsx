import { customers } from "@/lib/demo-data";
import { DataTable } from "@/components/data-table";
import { Badge, Button } from "@/components/ui";
export default function Clients(){return <div><Badge>CRM simple</Badge><div className="mb-6 mt-3 flex items-center justify-between"><div><h1 className="text-3xl font-black text-ocean">Clients</h1><p className="text-slate-600">Liste clients et statut de paiement.</p></div><Button>Nouveau client</Button></div><DataTable columns={["Nom","Email","Téléphone","Île","Statut"]} rows={customers.map(c=>[c.name,c.email,c.phone||"",c.island,c.status])}/></div>}
