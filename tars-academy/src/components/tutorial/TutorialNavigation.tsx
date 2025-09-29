import Link from 'next/link';

interface TutorialNavigationProps {
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
}

export default function TutorialNavigation({ previous, next }: TutorialNavigationProps) {
  return (
    <div className="mt-12 pt-8 border-t border-slate-700">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        {previous ? (
          <Link
            href={previous.href}
            className="flex-1 group p-4 rounded-xl border border-slate-700 hover:border-space-500/50 transition-colors bg-slate-800/30"
          >
            <div className="text-sm text-slate-400 mb-1">← Anterior</div>
            <div className="text-slate-200 group-hover:text-space-300 transition-colors">
              {previous.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}

        {next ? (
          <Link
            href={next.href}
            className="flex-1 group p-4 rounded-xl border border-slate-700 hover:border-space-500/50 transition-colors bg-slate-800/30 text-right"
          >
            <div className="text-sm text-slate-400 mb-1">Siguiente →</div>
            <div className="text-slate-200 group-hover:text-space-300 transition-colors">
              {next.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-space-300 transition-colors text-sm"
        >
          🏠 Volver a la Academia
        </Link>
      </div>
    </div>
  );
}