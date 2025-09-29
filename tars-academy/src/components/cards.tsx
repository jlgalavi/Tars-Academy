type CardProps = { title: string; href: string; children?: React.ReactNode; meta?: string; disabled?: boolean };
export function Card({ title, href, children, meta, disabled = false }: CardProps) {
  const isDisabled = disabled || href === "#";
  
  if (isDisabled) {
    return (
      <div className="card block opacity-50 cursor-not-allowed">
        <div className="flex items-baseline justify-between">
          <h3 className="text-base font-semibold">{title}</h3>
          {meta ? <span className="tag bg-slate-600">{meta}</span> : <span className="tag bg-slate-600 text-xs">Próximamente</span>}
        </div>
        {children ? <p className="mt-1 text-sm text-[color:var(--muted)]">{children}</p> : null}
      </div>
    );
  }

  return (
    <a href={href} className="card block">
      <div className="flex items-baseline justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
        {meta ? <span className="tag">{meta}</span> : null}
      </div>
      {children ? <p className="mt-1 text-sm text-[color:var(--muted)]">{children}</p> : null}
    </a>
  );
}
