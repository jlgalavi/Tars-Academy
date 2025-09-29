import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && (
            <span className="text-slate-600">→</span>
          )}
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-space-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-200">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}