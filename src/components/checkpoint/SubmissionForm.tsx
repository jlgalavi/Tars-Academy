"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createBrowserClient } from "@supabase/ssr";

const Schema = z.object({
  link: z.string().url({ message: "Introduce una URL válida (PR, repo, vídeo, etc.)" }),
  notes: z.string().max(2000).optional(),
});

type FormValues = z.infer<typeof Schema>;

export function SubmissionForm({ checkpointId, previous }: { checkpointId: string; previous?: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: {
      link: previous?.link ?? "",
      notes: previous?.notes ?? "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        alert("Necesitas iniciar sesión para enviar tu entrega.");
        return;
      }

      const { error } = await supabase.from("submissions").insert({
        checkpoint_id: checkpointId,
        user_id: user.id,
        link: values.link,
        notes: values.notes ?? null,
      });

      if (error) throw error;
      router.refresh();
    } catch (e: any) {
      alert(e.message ?? "Error guardando la entrega");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Entrega</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {previous && (
          <div className="text-sm text-muted-foreground">
            <div>Última entrega: <strong>{previous.status}</strong></div>
            <div className="truncate">{previous.link}</div>
          </div>
        )}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Link</label>
            <Input placeholder="URL del PR / repo / vídeo" {...form.register("link")} />
            {form.formState.errors.link && (
              <p className="text-sm text-red-600 mt-1">{form.formState.errors.link.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Notas (opcional)</label>
            <Textarea rows={4} placeholder="Contexto, decisiones, pendientes…" {...form.register("notes")} />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Enviando…" : "Enviar entrega"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}