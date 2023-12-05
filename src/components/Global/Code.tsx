interface CodeProps {
  children: string;
}

export default function Code({ children }: CodeProps) {
  return <code className="px-2 py-1 rounded-xl bg-slate-800">{children}</code>;
}
