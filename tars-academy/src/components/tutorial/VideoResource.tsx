interface VideoResourceProps {
  title: string;
  url: string;
  description?: string;
  duration?: string;
  language?: string;
}

export default function VideoResource({ title, url, description, duration, language = "ES" }: VideoResourceProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-red-500/50 transition-all group"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
          <span className="text-2xl">▶️</span>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className="text-red-300 font-semibold group-hover:text-red-200 transition-colors">{title}</h4>
            <div className="flex gap-2 flex-shrink-0">
              {duration && (
                <span className="text-xs bg-slate-700/50 text-slate-400 px-2 py-1 rounded">
                  {duration}
                </span>
              )}
              {language && (
                <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">
                  {language}
                </span>
              )}
            </div>
          </div>
          {description && (
            <p className="text-slate-400 text-sm">{description}</p>
          )}
        </div>
      </div>
    </a>
  );
}
