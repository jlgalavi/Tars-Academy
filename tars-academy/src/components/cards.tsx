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

type CourseCardProps = { 
  title: string; 
  href: string; 
  description: string;
  duration: string;
  modules: number;
  level: string;
  team: string;
  icon: string;
  disabled?: boolean;
};

export function CourseCard({ 
  title, 
  href, 
  description, 
  duration, 
  modules, 
  level, 
  team, 
  icon,
  disabled = false 
}: CourseCardProps) {
  const isDisabled = disabled || href === "#";
  
  if (isDisabled) {
    return (
      <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 opacity-50 cursor-not-allowed">
        <div className="absolute top-4 right-4">
          <span className="text-3xl">{icon}</span>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300">
            ⏱️ {duration}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300">
            📚 {modules} módulos
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300">
            📊 {level}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300">
            🔧 {team}
          </span>
        </div>
        
        <div className="text-center pt-2">
          <span className="text-slate-500 text-sm">Próximamente</span>
        </div>
      </div>
    );
  }

  return (
    <a 
      href={href} 
      className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] group block"
    >
      <div className="absolute top-4 right-4 group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 group-hover:bg-purple-900/30 group-hover:text-purple-200 transition-colors">
          ⏱️ {duration}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 group-hover:bg-purple-900/30 group-hover:text-purple-200 transition-colors">
          📚 {modules} módulos
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 group-hover:bg-purple-900/30 group-hover:text-purple-200 transition-colors">
          📊 {level}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 group-hover:bg-purple-900/30 group-hover:text-purple-200 transition-colors">
          🔧 {team}
        </span>
      </div>
      
      <div className="text-center pt-2">
        <span className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
          Comenzar curso
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </a>
  );
}
