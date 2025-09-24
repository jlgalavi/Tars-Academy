import { notFound } from "next/navigation";
import { createSupabaseServer } from "@/lib/auth";
import { SubmissionForm } from "@/components/checkpoint/SubmissionForm";

export default async function CheckpointPage({ params }: { params: { id: string } }) {
  const supabase = await createSupabaseServer();
  const { data: checkpoint } = await supabase
    .from("checkpoints")
    .select("id,title,description,module_id,order")
    .eq("id", params.id)
    .single();

  if (!checkpoint) return notFound();

  // (Opcional) Cargar última entrega del usuario para este checkpoint
  const { data: authUser } = await supabase.auth.getUser();
  let previous: any = null;
  if (authUser.user) {
    const { data } = await supabase
      .from("submissions")
      .select("id,link,notes,status,created_at,updated_at")
      .eq("checkpoint_id", checkpoint.id)
      .eq("user_id", authUser.user.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    previous = data;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">{checkpoint.title}</h1>
        <p className="text-muted-foreground whitespace-pre-wrap">{checkpoint.description}</p>
      </header>

      <SubmissionForm checkpointId={checkpoint.id} previous={previous} />
    </div>
    );
  }