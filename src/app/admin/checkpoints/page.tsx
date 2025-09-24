import { createSupabaseServer } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

async function setStatus(id: string, status: "approved"|"changes") {
  "use server";
  const supabase = createSupabaseServer();
  // Verificación de admin vía perfiles
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("No auth");
  const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", user.id).single();
  if (!profile?.is_admin) throw new Error("Forbidden");

  const { error } = await supabase.from("submissions").update({ status }).eq("id", id);
  if (error) throw error;
}

export default async function AdminSubmissionsPage() {
  const supabase = createSupabaseServer();

  // Asegura que el usuario admin puede ver todas (gracias a la policy select_admin)
  const { data: submissions } = await supabase
    .from("submissions")
    .select("id,link,notes,status,created_at, user_id, checkpoint_id, checkpoints(title), profiles: user_id(full_name)")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Revisión de entregas</h1>
      <div className="grid gap-3">
        {(submissions ?? []).map((s) => (
          <div key={s.id} className="border rounded-xl p-4 flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <a href={s.link} target="_blank" className="font-medium underline">{s.checkpoints?.title ?? "Checkpoint"}</a>
                <Badge variant={s.status === "approved" ? "default" : s.status === "changes" ? "destructive" : "secondary"}>{s.status}</Badge>
              </div>
              <div className="text-sm text-muted-foreground">{s.link}</div>
              {s.notes && <p className="text-sm whitespace-pre-wrap">{s.notes}</p>}
            </div>
            <div className="flex items-center gap-2">
              <form action={async () => { 'use server'; await setStatus(s.id, 'approved'); }}>
                <Button type="submit">Aprobar</Button>
              </form>
              <form action={async () => { 'use server'; await setStatus(s.id, 'changes'); }}>
                <Button variant="destructive" type="submit">Pedir cambios</Button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}