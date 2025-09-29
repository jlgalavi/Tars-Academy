import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createSupabaseRSC } from "@/lib/auth";

export default async function Dashboard() {
  const supabase = await createSupabaseRSC();
  const { data: auth } = await supabase.auth.getUser();

  let approvedDistinctCount = 0;
  let totalCheckpoints = 0;

  // Total checkpoints
  {
    const { count } = await supabase
      .from("checkpoints")
      .select("id", { count: "exact", head: true });
    totalCheckpoints = count ?? 0;
  }

  // Approved submissions for current user (distinct by checkpoint)
  if (auth.user) {
    const { data: approvedRows } = await supabase
      .from("submissions")
      .select("checkpoint_id,status")
      .eq("user_id", auth.user.id)
      .eq("status", "approved");

    const uniqueApproved = new Set((approvedRows ?? []).map((r: any) => r.checkpoint_id));
    approvedDistinctCount = uniqueApproved.size;
  }

  const progress = totalCheckpoints > 0 ? Math.round((approvedDistinctCount / totalCheckpoints) * 100) : 0;

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
            <Badge>
              {approvedDistinctCount} / {totalCheckpoints}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">
              {auth.user ? "Sigue con tu siguiente checkpoint desde el mapa de misión" : "Inicia sesión para ver tu progreso"}
            </p>
            <Button size="sm">Ir al mapa</Button>
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
