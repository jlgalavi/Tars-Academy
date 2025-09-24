import { supabase } from "./supabase";

export async function getModulesWithFirstCheckpoint() {
  return supabase
    .from("modules")
    .select("id, slug, title, idx, checkpoints(id, title, status)")
    .order("idx");
}

export async function getModuleBySlug(slug: string) {
  return supabase
    .from("modules")
    .select("id, slug, title, idx, checkpoints(id, title, idx, status)")
    .eq("slug", slug)
    .order("idx", { referencedTable: "checkpoints" })
    .single();
}

export async function getCheckpoint(id: string) {
  return supabase
    .from("checkpoints")
    .select("id, title, idx, status, module_id")
    .eq("id", id)
    .single();
}
