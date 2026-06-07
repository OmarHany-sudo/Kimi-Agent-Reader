import { FileText } from 'lucide-react';
import type { SourceRef } from '@/types';

interface SourceBadgeProps {
  source: SourceRef;
  onClick: (source: SourceRef) => void;
}

export function SourceBadge({ source, onClick }: SourceBadgeProps) {
  return (
    <button
      onClick={() => onClick(source)}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/30 
                 text-emerald-700 dark:text-emerald-400 text-xs font-medium 
                 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors
                 border border-emerald-200 dark:border-emerald-800"
      title="اضغط لعرض المصدر"
    >
      <FileText className="w-3 h-3" />
      <span>{source.file} - ص. {source.page}</span>
    </button>
  );
}
