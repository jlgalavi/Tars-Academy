'use client';

import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Botón móvil */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn w-full justify-between"
        >
          <span>📋 Índice</span>
          <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {isOpen && (
          <div className="mt-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
            <nav>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeId === item.id
                          ? 'bg-space-500/20 text-space-300 border-l-2 border-space-500'
                          : 'text-slate-300 hover:text-slate-200 hover:bg-slate-700/50'
                      } ${item.level === 3 ? 'ml-4' : ''}`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* TOC Desktop */}
      <div className="hidden lg:block">
        <div className="sticky top-24 max-w-xs">
          <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700 backdrop-blur-sm">
            <h3 className="font-semibold text-slate-200 mb-3 flex items-center gap-2">
              📋 Índice
            </h3>
            <nav>
              <ul className="space-y-1 max-h-[70vh] overflow-y-auto tutorial-toc">
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeId === item.id
                          ? 'bg-space-500/20 text-space-300 border-l-2 border-space-500'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                      } ${item.level === 3 ? 'ml-4' : ''}`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}