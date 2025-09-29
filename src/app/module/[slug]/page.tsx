"use client";

import { useParams } from "next/navigation";
import { missions } from "@/data/missions";
import MissionChecklist from "@/components/MissionChecklist";
import MissionProgress from "@/components/MissionProgress";
import MissionEvidence from "@/components/MissionEvidence";
import { useEffect, useState } from "react";

export default function ModuleBySlugPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : (params?.slug as string);
  const mission = missions[slug ?? ""] ?? missions["mission-0"]; // fallback a misión-0

  const storageKey = `mission:${mission.slug}:checklist`;
  const [xp, setXp] = useState<number>(0);

  // Evitar disparidades SSR/CSR — todo ya es client component
  useEffect(() => {
    // no-op; mantenemos patrón por si quieres side effects
  }, []);

  return (
    <main style={{ maxWidth: 920, margin: "24px auto", padding: "0 16px", display: "grid", gap: 16 }}>
      <header style={{ display: "grid", gap: 6 }}>
        <h1 style={{ fontSize: 28, margin: 0 }}>{mission.title}</h1>
        <p style={{ color: "#4b5563", margin: 0 }}>{mission.description}</p>
      </header>

      <MissionProgress current={xp} goal={mission.xpGoal} />

      <section style={{ display: "grid", gap: 12 }}>
        <MissionChecklist
          storageKey={storageKey}
          items={mission.checklist}
          onChangeXP={(v) => setXp(v)}
        />
        <MissionEvidence />
      </section>

      <section style={{ border: "1px dashed #d1d5db", borderRadius: 12, padding: 16 }}>
        <strong>Notas</strong>
        <ul>
          <li>Ramas: <code>develop</code> (trabajo) → <code>main</code> (estable).</li>
          <li>Ciclo de tareas: jueves → jueves. Reporte en <code>Drive/14_TAREAS/Semana-XX</code>.</li>
          <li>Todos los cambios entran por Pull Request con plantilla.</li>
        </ul>
        {mission.rubricNote && (
          <p style={{ color: "#6b7280", fontSize: 13, marginTop: 8 }}>{mission.rubricNote}</p>
        )}
      </section>
    </main>
  );
}
