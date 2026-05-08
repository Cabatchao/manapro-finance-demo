import Link from "next/link";

export function Button(props: { children: React.ReactNode; href?: string; className?: string }) {
  const className = "inline-flex items-center justify-center rounded-2xl bg-ocean px-5 py-3 text-sm font-semibold text-white shadow-soft " + (props.className || "");
  return props.href ? <Link className={className} href={props.href}>{props.children}</Link> : <button className={className}>{props.children}</button>;
}

export function Card(props: { children: React.ReactNode; className?: string }) {
  return <div className={"rounded-3xl border border-slate-200 bg-white p-6 shadow-sm " + (props.className || "")}>{props.children}</div>;
}

export function Badge(props: { children: React.ReactNode; className?: string }) {
  return <span className={"inline-flex rounded-full bg-lagoon/10 px-3 py-1 text-xs font-semibold text-lagoon " + (props.className || "")}>{props.children}</span>;
}

export function SectionTitle(props: { eyebrow?: string; title: string; text?: string }) {
  return <div className="mx-auto max-w-3xl text-center">
    {props.eyebrow && <Badge>{props.eyebrow}</Badge>}
    <h2 className="mt-4 text-3xl font-bold tracking-tight text-ocean md:text-5xl">{props.title}</h2>
    {props.text && <p className="mt-4 text-lg text-slate-600">{props.text}</p>}
  </div>;
}
