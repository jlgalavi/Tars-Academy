import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-8 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">TARS Academy 🚀</h1>
      <p className="text-muted-foreground">Tailwind + shadcn están activos.</p>

      <div className="flex items-center gap-3">
        <Button>Despegar</Button>
        <Button variant="outline">Checklist</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estado de la misión</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Si ves estilos bonitos aquí y en los botones, todo está OK ✅
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
