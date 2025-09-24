"use server";
import { z } from "zod";
import { supabase } from "./supabase";

const SubmissionSchema = z.object({
  checkpoint_id: z.string().uuid(),
  links: z.array(z.string().url()).min(1),
  notes: z.string().optional(),
});

export async function submitCheckpoint(formData: FormData) {
  const parsed = SubmissionSchema.safeParse({
    checkpoint_id: formData.get("checkpoint_id"),
    links: (formData.get("links") as string)?.split(",").map(s => s.trim()),
    notes: formData.get("notes") as string | undefined,
  });
  if (!parsed.success) return { ok: false, error: "Datos inválidos" };

  const user = { id: "anon" }; // TODO: suplántalo cuando tengas Auth
  const { error } = await supabase.from("submissions").insert({
    user_id: user.id,
    checkpoint_id: parsed.data.checkpoint_id,
    links: parsed.data.links,
    notes: parsed.data.notes ?? null,
    status: "pending",
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
