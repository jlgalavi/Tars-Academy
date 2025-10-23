interface DiagramBoxProps {
  title: string;
  children: React.ReactNode;
  variant?: 'info' | 'example' | 'warning' | 'schematic';
}

export default function DiagramBox({ title, children, variant = 'info' }: DiagramBoxProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'info':
        return {
          border: 'border-blue-500/30',
          bg: 'from-blue-900/20 to-cyan-900/20',
          title: 'text-blue-300'
        };
      case 'example':
        return {
          border: 'border-green-500/30',
          bg: 'from-green-900/20 to-emerald-900/20',
          title: 'text-green-300'
        };
      case 'warning':
        return {
          border: 'border-orange-500/30',
          bg: 'from-orange-900/20 to-red-900/20',
          title: 'text-orange-300'
        };
      case 'schematic':
        return {
          border: 'border-purple-500/30',
          bg: 'from-purple-900/20 to-pink-900/20',
          title: 'text-purple-300'
        };
      default:
        return {
          border: 'border-slate-500/30',
          bg: 'from-slate-900/20 to-slate-800/20',
          title: 'text-slate-300'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`bg-gradient-to-br ${styles.bg} border ${styles.border} rounded-xl p-6 my-6`}>
      <h4 className={`${styles.title} font-semibold mb-4 text-lg`}>{title}</h4>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}
