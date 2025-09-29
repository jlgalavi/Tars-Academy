interface TutorialChipProps {
  label: string;
  variant?: 'level' | 'time' | 'status' | 'updated';
  icon?: string;
}

export default function TutorialChip({ label, variant = 'level', icon }: TutorialChipProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'level':
        return 'bg-space-500/20 text-space-300 border-space-500/30';
      case 'time':
        return 'bg-energy-500/20 text-energy-300 border-energy-500/30';
      case 'status':
        return 'bg-deep-500/20 text-deep-300 border-deep-500/30';
      case 'updated':
        return 'bg-slate-700 text-slate-300 border-slate-600';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full border ${getVariantStyles()}`}>
      {icon && <span>{icon}</span>}
      {label}
    </span>
  );
}