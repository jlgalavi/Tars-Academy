"use client";
type Props = { current: number; goal: number };

export default function MissionProgress({ current, goal }: Props) {
  const capped = Math.min(current, goal);
  const pct = Math.round((capped / goal) * 100);

  return (
    <div style={{ display: "grid", gap: 6 }}>
      <div style={{ fontSize: 14 }}>
        Progreso XP: <strong>{capped}</strong> / {goal} XP ({pct}%)
      </div>
      <div style={{ height: 10, background: "#f3f4f6", borderRadius: 999 }}>
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: "#3b82f6",
            borderRadius: 999,
            transition: "width .25s ease"
          }}
        />
      </div>
    </div>
  );
}
