import { ArrowRight, Bot, FileText, Receipt, Send, ShieldCheck, WalletCards } from "lucide-react";
import { PublicNav } from "@/components/nav";
import { Badge, Button, Card, SectionTitle } from "@/components/ui";
import { plans } from "@/lib/demo-data";

const features = [
  [FileText, "Devis & factures en XPF", "Crée des documents propres, transforme un devis en facture et suis les statuts."],
  [Send, "Relances intelligentes", "Prépare des relances douces, fermes ou finales sans casser la relation client."],
  [Receipt, "Dépenses & justificatifs", "Classe les dépenses, ajoute les tickets et prépare un export mensuel."],
  [WalletCards, "Trésorerie simple", "Visualise encaissé, en attente, dépenses et bénéfice estimé."],
  [Bot, "Assistant IA", "Demande ce qu’il faut relancer, ce qu’il manque et ce que tu dois envoyer au comptable."],
  [ShieldCheck, "MVP non bancaire", "Un SaaS de gestion clair : pas de compte, pas de carte, pas de détention de fonds dans la démo."]
];

export default function Home(){
  return <><PublicNav/><main>
    <section className="saas-grid bg-gradient-to-b from-sand to-white px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <Badge>Démo SaaS Polynésie</Badge>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-ocean md:text-6xl">La gestion financière simple pour les entrepreneurs polynésiens</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">Crée tes devis, envoie tes factures, suis tes paiements, relance tes clients et garde le contrôle de ta trésorerie en XPF.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/demo">Voir la démo <ArrowRight className="ml-2 h-4 w-4"/></Button><Button href="#offres" className="bg-white text-ocean border border-slate-200 shadow-none">Voir les offres</Button></div>
          <p className="mt-4 text-xs text-slate-500">ManaPro est une plateforme de gestion. Ce n’est pas une banque et aucune opération de paiement réglementée n’est fournie dans cette démo.</p>
        </div>
        <Card className="shadow-soft">
          <div className="mb-6 flex items-center justify-between"><div><p className="text-sm text-slate-500">Trésorerie estimée</p><p className="text-3xl font-black text-ocean">249 400 XPF</p></div><Badge>Mai 2026</Badge></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[["Factures en attente","204 000 XPF"],["En retard","76 000 XPF"],["Dépenses","66 500 XPF"],["Bénéfice estimé","137 500 XPF"]].map(([a,b])=><div key={a} className="rounded-2xl bg-slate-50 p-4"><p className="text-xs text-slate-500">{a}</p><p className="mt-1 font-bold text-ocean">{b}</p></div>)}
          </div>
          <div className="mt-5 rounded-2xl bg-lagoon/10 p-4 text-sm text-ocean">Assistant IA : “Aujourd’hui, relance Garage Teva pour FAC-2026-002.”</div>
        </Card>
      </div>
    </section>

    <section id="fonctionnalites" className="px-5 py-20"><SectionTitle eyebrow="Fonctionnalités" title="Tout centraliser au même endroit" text="Une couche de gestion locale entre l’entrepreneur, son comptable, ses clients et sa banque."/>
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">{features.map(([Icon,title,text]: any)=><Card key={title}><Icon className="h-7 w-7 text-lagoon"/><h3 className="mt-4 font-bold text-ocean">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></Card>)}</div>
    </section>

    <section className="bg-ocean px-5 py-20 text-white"><div className="mx-auto max-w-5xl text-center"><Badge className="bg-white/10 text-white">Assistant IA</Badge><h2 className="mt-4 text-3xl font-bold md:text-5xl">Un copilote qui n’invente pas</h2><p className="mt-4 text-lg text-white/75">L’assistant répond seulement avec les données présentes dans l’application. S’il manque une information, il le dit clairement.</p></div></section>

    <section id="offres" className="px-5 py-20"><SectionTitle eyebrow="Offres" title="Des prix simples en XPF" text="Commence petit, puis ajoute les paiements et intégrations via partenaires."/>
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">{plans.map(plan=><Card key={plan.name} className={plan.popular ? "border-lagoon ring-2 ring-lagoon/20" : ""}>{plan.popular && <Badge>Le plus populaire</Badge>}<h3 className="mt-4 text-2xl font-black text-ocean">{plan.name}</h3><p className="mt-2 text-sm text-slate-500">{plan.target}</p><p className="mt-6 text-3xl font-black text-ocean">{plan.price}<span className="text-sm font-medium text-slate-500">/mois</span></p><ul className="mt-6 space-y-3 text-sm text-slate-700">{plan.features.map(f=><li key={f}>✓ {f}</li>)}</ul><Button href="/demo" className="mt-6 w-full">Tester la démo</Button></Card>)}</div>
    </section>
  </main></>
}
