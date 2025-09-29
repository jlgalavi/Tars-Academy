interface CalloutProps {
  type: 'info' | 'tip' | 'warning' | 'check';
  children: React.ReactNode;
}

export default function Callout({ type, children }: CalloutProps) {
  const getCalloutStyles = () => {
    switch (type) {
      case 'info':
        return {
          icon: 'ℹ️',
          className: 'bg-deep-500/10 border-deep-500/30 text-slate-200'
        };
      case 'tip':
        return {
          icon: '💡',
          className: 'bg-energy-500/10 border-energy-500/30 text-slate-200'
        };
      case 'warning':
        return {
          icon: '⚠️',
          className: 'bg-red-500/10 border-red-500/30 text-slate-200'
        };
      case 'check':
        return {
          icon: '🧪',
          className: 'bg-green-500/10 border-green-500/30 text-slate-200'
        };
      default:
        return {
          icon: 'ℹ️',
          className: 'bg-slate-700/50 border-slate-600 text-slate-200'
        };
    }
  };

  const { icon, className } = getCalloutStyles();

  return (
    <div className={`rounded-xl border p-4 my-4 ${className} backdrop-blur-sm`}>
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
        <div className="flex-1 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}