export type ChecklistItem = {
  id: string;
  title: string;
  hint?: string;
  xp: number;
};

export type Mission = {
  slug: string;
  title: string;
  description: string;
  xpGoal: number; // objetivo histórico/esperado (55)
  checklist: ChecklistItem[];
  rubricNote?: string;
};

export const missions: Record<string, Mission> = {
  "mission-0": {
    slug: "mission-0",
    title: "Misión 0 — Operador/a en prácticas",
    description:
      "Dominar Drive, GitHub y el ciclo de tareas (jueves→jueves) para poder iniciar misiones técnicas. Sube evidencias (capturas/enlaces) y crea tu primer PR.",
    xpGoal: 55,
    rubricNote:
      "El XP total se calcula con base en los ítems completados. El objetivo esperado es ~55 XP.",
    checklist: [
      // DRIVE (5 x 2 = 10)
      { id: "DRIVE-1", title: "Localizo 10_GENERAL y reviso subcarpetas", xp: 2 },
      { id: "DRIVE-2", title: "Localizo 11_EQUIPOS y mi subcarpeta de subsistema", xp: 2 },
      { id: "DRIVE-3", title: "Localizo 12_RECURSOS y abro un recurso de ejemplo", xp: 2 },
      { id: "DRIVE-4", title: "Localizo 13_ACADEMIA y leo 'Cómo preparar entorno'", xp: 2 },
      { id: "DRIVE-5", title: "Localizo 14_TAREAS y la semana en curso", xp: 2 },

      // GIT (4 x 2 = 8)
      { id: "GIT-1", title: "Acepto invitación a UPV-TARS y tengo rol escritor/a", xp: 2 },
      { id: "GIT-2", title: "Clono repo y creo rama desde `develop`", xp: 2 },
      { id: "GIT-3", title: "Abro Issue 'Misión 0' con plantilla", xp: 2 },
      { id: "GIT-4", title: "Creo PR usando la plantilla", xp: 2 },

      // TAREAS (1 x 10 = 10)
      { id: "TASK-1", title: "Entrego reporte semanal en Drive (14_TAREAS/Semana-XX)", xp: 10 },

      // Acciones “bonus” (5 + 15 + 5 = 25)
      { id: "ISSUE-DONE", title: "Issue enlazado correctamente en el PR", xp: 5 },
      { id: "PR-MERGED", title: "PR revisado y fusionado a `main`", xp: 15 },
      { id: "EVIDENCE", title: "Evidencias documentadas (links/capturas) en el PR y Drive", xp: 5 }
    ]
  }
};

