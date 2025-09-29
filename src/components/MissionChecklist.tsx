"use client";
import { useEffect, useMemo, useState } from "react";
import type { ChecklistItem } from "@/data/missions";

type Props = {
  storageKey: string;      // p.ej. "mission:mission-0:checklist"
  items: ChecklistItem[];
  onChangeXP?: (xp: number) => void;
};

export default function MissionChecklist({ storageKey, items, onChangeXP }: Props) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (raw) setChecked(JSON.parse(raw));
  }, [storageKey]);

  const totalXP = useMemo(() => {
    return items.reduce((acc, it) => acc + (checked[it.id] ? it.xp : 0), 0);
  }, [checked, items]);

  useEffect(() => {
    onChangeXP?.(totalXP);
  }, [totalXP, onChangeXP]);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }

  function reset() {
    localStorage.removeItem(storageKey);
    setChecked({});
  }

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <strong>Checklist</strong>
        <button onClick={reset} style={{ fontSize: 12, opacity: 0.8 }}>Reiniciar</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6 }}>
        {items.map((it) => (
          <li key={it.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input
              id={it.id}
              type="checkbox"
              checked={!!checked[it.id]}
              onChange={() => toggle(it.id)}
            />
            <label htmlFor={it.id} style={{ cursor: "pointer" }}>
              {it.title} <span style={{ color: "#6b7280", fontSize: 12 }}>+{it.xp} XP</span>
            </label>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 12, fontSize: 13, color: "#374151" }}>
        XP de checklist: <strong>{totalXP}</strong>
      </div>
    </div>
  );
}
