import Link from "next/link";
import { Button } from "./ui";

export function PublicNav(){
  return <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <Link href="/" className="flex items-center gap-2 font-bold text-ocean"><span className="grid h-9 w-9 place-items-center rounded-2xl bg-lagoon text-white">M</span> ManaPro</Link>
      <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
        <Link href="/#fonctionnalites">Fonctionnalités</Link>
        <Link href="/#offres">Offres</Link>
        <Link href="/#faq">FAQ</Link>
      </nav>
      <Button href="/demo">Voir la démo</Button>
    </div>
  </header>
}

export function AppShell({children}: {children: React.ReactNode}){
  const links = [["/demo","Dashboard"],["/demo/clients","Clients"],["/demo/devis","Devis"],["/demo/factures","Factures"],["/demo/depenses","Dépenses"],["/demo/assistant","Assistant IA"],["/demo/exports","Exports"]];
  return <div className="min-h-screen bg-slate-50">
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white p-5 lg:block">
      <Link href="/" className="mb-8 flex items-center gap-2 font-bold text-ocean"><span className="grid h-9 w-9 place-items-center rounded-2xl bg-lagoon text-white">M</span> ManaPro</Link>
      <nav className="space-y-2">{links.map(([href,label])=><Link key={href} href={href} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">{label}</Link>)}</nav>
      <p className="absolute bottom-5 left-5 right-5 rounded-2xl bg-sand p-4 text-xs text-slate-600">Mode démo : données fictives, aucune opération bancaire.</p>
    </aside>
    <main className="lg:pl-64"><div className="mx-auto max-w-7xl p-5 md:p-8">{children}</div></main>
  </div>
}
