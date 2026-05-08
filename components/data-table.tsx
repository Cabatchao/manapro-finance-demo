export function DataTable({ columns, rows }: { columns: string[]; rows: (string | number | React.ReactNode)[][] }){
  return <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-slate-500"><tr>{columns.map(c=><th key={c} className="px-5 py-4 font-semibold">{c}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{rows.map((r,i)=><tr key={i}>{r.map((cell,j)=><td key={j} className="px-5 py-4 text-slate-700">{cell}</td>)}</tr>)}</tbody></table></div>
}
