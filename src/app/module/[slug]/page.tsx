"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Checkpoint = {
  id: string;
  title: string;
  idx: number;
  status: string;
};
type Module = {
  id: string;
  title: string;
  slug: string;
  idx: number;
  checkpoints: Checkpoint[];
};

const statusLabel: Record<string, string> = {
  done: "Completado",
  "in-progress": "En progreso",
  locked: "Bloqueado",
};

export default function ModulePage() {
  const { slug } = useParams<{ slug: string }>();
  const [mod, setMod] = useState<Module | null>(null);

  useEffect(() => {
    const fetchModule = async () => {
      const { data, error } = await supabase
        .from("modules")
        .select("id, title, slug, idx, checkpoints(id, title, idx, status)")
        .eq("slug", slug)
        .order("idx", { ascending: true }) // ordena módulos
        .maybeSingle();

      if (!error && data) {
        // ordenar checkpoints por idx
        const checkpoints = [...(data.checkpoints ?? [])].sort(
          (a, b) => a.idx - b.idx
        );
        setMod({ ...(data as Module), checkpoints });
      }
    };
    fetchModule();
  }, [slug]);

  if (!mod)
    return <p className="text-sm text-muted-foreground">Cargando módulo…</p>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{mod.title}</h1>
        <p className="text-sm text-muted-foreground">
          {mod.checkpoints?.length || 0} checkpoints
        </p>
      </div>

      <div className="grid gap-3">
        {mod.checkpoints?.map((cp) => (
          <Card key={cp.id} className="hover:shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">
                {cp.idx}. {cp.title}
              </CardTitle>
              <Badge variant={cp.status === "locked" ? "outline" : "default"}>
                {statusLabel[cp.status] ?? cp.status}
              </Badge>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {cp.status === "locked" ? (
                <span className="opacity-50">Bloqueado</span>
              ) : (
                <Link
                  href={`/checkpoint/${cp.id}`}
                  className="underline hover:text-primary"
                >
                  Abrir checkpoint
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <Link href="/mission" className="text-sm underline">
          ← Volver al Mission Map
        </Link>
      </div>
    </div>
  );
}
