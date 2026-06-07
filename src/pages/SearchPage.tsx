import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, FileText, Lightbulb, BookMarked, Layers, HelpCircle, X } from 'lucide-react';
import Fuse from 'fuse.js';
import { useOutletContext } from 'react-router-dom';
import { concepts, definitions, terms, questions } from '@/data/courseData';
import { SourceBadge } from '@/components/SourceBadge';
import type { SourceRef } from '@/types';

interface OutletContext {
  openSource: (source: SourceRef) => void;
}

const allData = [
  ...concepts.map(c => ({ ...c, type: 'مفهوم', typeIcon: Lightbulb })),
  ...definitions.map(d => ({ ...d, type: 'تعريف', typeIcon: BookMarked, explanation: d.definition })),
  ...terms.map(t => ({ ...t, type: 'مصطلح', typeIcon: Layers, explanation: `${t.meaning} - ${t.explanation}` })),
  ...questions.map(q => ({ ...q, type: 'سؤال', typeIcon: HelpCircle, term: q.question, explanation: q.answer || q.correctAnswer?.toString() || '' })),
];

const fuseOptions = {
  keys: ['term', 'explanation', 'definition', 'question', 'answer'],
  threshold: 0.4,
  includeScore: true,
  includeMatches: true,
};

const fuse = new Fuse(allData, fuseOptions);

export function SearchPage() {
  const { openSource } = useOutletContext<OutletContext>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      if (query) {
        setSearchParams({ q: query });
      } else {
        setSearchParams({});
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query, setSearchParams]);

  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return fuse.search(debouncedQuery).slice(0, 30);
  }, [debouncedQuery]);

  const typeColors: Record<string, string> = {
    'مفهوم': 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400',
    'تعريف': 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400',
    'مصطلح': 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400',
    'سؤال': 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400',
  };

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
            <Search className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">محرك البحث</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">ابحث في الملخصات، المفاهيم، التعريفات، المصطلحات، والأسئلة</p>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="اكتب كلمة البحث..."
            autoFocus
            className="w-full pr-10 pl-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none text-lg"
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {query && !debouncedQuery && (
          <div className="text-center py-8 text-gray-400">
            <p>جاري البحث...</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            تم العثور على {results.length} نتيجة
          </div>
        )}

        <div className="space-y-3">
          {results.map((result, index) => {
            const item = result.item;
            const ItemIcon = item.typeIcon || FileText;
            return (
              <motion.div
                key={`${item.type}-${item.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${typeColors[item.type] || ''}`}>
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${typeColors[item.type] || ''}`}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {(item as any).term || (item as any).question || (item as any).meaning || ''}
                    </h3>
                    {(item as any).explanation && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{(item as any).explanation}</p>
                    )}
                    {(item as any).definition && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{(item as any).definition}</p>
                    )}
                    <div className="mt-2">
                      <SourceBadge source={item.source} onClick={openSource} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {debouncedQuery && results.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p className="text-gray-500">لا توجد نتائج مطابقة لـ &quot;{debouncedQuery}&quot;</p>
            <p className="text-sm text-gray-400 mt-1">جرب بحثاً مختلفاً</p>
          </div>
        )}

        {!query && (
          <div className="text-center py-12 text-gray-400">
            <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>اكتب كلمة البحث للبدء</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['إذاعة', 'بودكاست', 'VR', 'CRM', 'Infographic', 'SEO'].map(term => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
