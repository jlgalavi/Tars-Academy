import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const progress = 15; // placeholder
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <Card>
        <CardHeader>
          <CardTitle>Progreso de la misión</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Progress value={progress} />
          <p className="text-sm text-muted-foreground">{progress}% completado</p>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Checkpoints</CardTitle>
            <Badge>2 / 10</Badge>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">Siguiente: CP1 — Comunicaciones con la base</p>
            <Button size="sm">Ir al siguiente</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Insignias</CardTitle>
            <Badge variant="outline">Piloto Novato</Badge>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Completa 3 checkpoints para obtener “Oficial de comunicaciones”.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
