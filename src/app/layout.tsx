import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TARS Academy",
  description: "Misión espacial TARS-X",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-background text-foreground">
        <header className="border-b">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-6">
            <Link href="/" className="font-semibold">TARS Academy 🚀</Link>
            <Link href="/dashboard" className="text-sm hover:underline">Dashboard</Link>
            <Link href="/mission" className="text-sm hover:underline">Mission Map</Link>
            <Link href="/resources" className="text-sm hover:underline">Recursos</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
