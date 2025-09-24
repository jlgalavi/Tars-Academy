"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type Module = {
  id: string;
  title: string;
  slug: string;
  idx: number;
  checkpoints?: { title: string; status: string }[];
};

const statusStyles: Record<string, string> = {
  done: "bg-green-600",
  "in-progress": "bg-blue-600",
  locked: "bg-zinc-600",
};

export default function Mission() {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: mods } = await supabase
        .from("modules")
        .select("id, title, slug, idx, checkpoints(title, status)")
        .order("idx");
      if (mods) setModules(mods as Module[]);
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Mission Map</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m) => (
          <Card key={m.id} className="relative overflow-hidden">
            <div
              className={`absolute right-0 top-0 h-1 w-24 ${
                statusStyles[m.checkpoints?.[0]?.status || "locked"]
              }`}
            />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <Link href={`/module/${m.slug}`} className="hover:underline">{m.title}</Link>
                <Badge
                  variant={
                    m.checkpoints?.[0]?.status === "locked" ? "outline" : "default"
                  }
                >
                  {m.checkpoints?.[0]?.status || "locked"}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {m.checkpoints?.[0]?.title || "Completa el módulo anterior."}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
