interface PageProps {
  children: JSX.Element[];
}

export default function Page({ children }: PageProps) {
  return <main className="flex flex-col min-h-screen">{children}</main>;
}
