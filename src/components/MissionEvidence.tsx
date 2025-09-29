"use client";
import { useEffect, useState } from "react";

type Field = { key: string; label: string; placeholder?: string };

const defaultFields: Field[] = [
  { key: "drive-general", label: "Evidencia Drive (10_GENERAL)", placeholder: "URL o breve descripción" },
  { key: "drive-tareas", label: "Evidencia Drive (14_TAREAS/Semana-XX)" },
  { key: "issue-url", label: "Issue URL" },
  { key: "pr-url", label: "Pull Request URL" },
  { key: "extra", label: "Extra (capturas, enlaces adicionales)" }
];

export default function MissionEvidence({
  storagePrefix = "mission:mission-0:evidence",
  fields = defaultFields
}: { storagePrefix?: string; fields?: Field[] }) {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const v: Record<string, string> = {};
    fields.forEach((f) => {
      const key = `${storagePrefix}:${f.key}`;
      v[f.key] = localStorage.getItem(key) || "";
    });
    setValues(v);
  }, [fields, storagePrefix]);

  function update(key: string, val: string) {
    setValues((prev) => {
      const next = { ...prev, [key]: val };
      localStorage.setItem(`${storagePrefix}:${key}`, val);
      return next;
    });
  }

  function reset() {
    fields.forEach((f) => localStorage.removeItem(`${storagePrefix}:${f.key}`));
    setValues({});
  }

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <strong>Evidencias</strong>
        <button onClick={reset} style={{ fontSize: 12, opacity: 0.8 }}>Reiniciar</button>
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        {fields.map((f) => (
          <div key={f.key} style={{ display: "grid", gap: 6 }}>
            <label htmlFor={f.key} style={{ fontSize: 13 }}>{f.label}</label>
            <input
              id={f.key}
              value={values[f.key] || ""}
              onChange={(e) => update(f.key, e.target.value)}
              placeholder={f.placeholder ?? ""}
              style={{
                border: "1px solid #d1d5db",
                borderRadius: 8,
                padding: "8px 10px"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
