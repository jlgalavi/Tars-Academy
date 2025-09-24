import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/auth";

export async function POST(req: Request) {
  const supabase = createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json();
  // validar body aquí…
  const { error } = await supabase.from("submissions").insert({
    checkpoint_id: body.checkpoint_id,
    user_id: user.id,
    link: body.link,
    notes: body.notes ?? null,
  });
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}