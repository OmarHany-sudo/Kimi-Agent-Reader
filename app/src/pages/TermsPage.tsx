import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Search, X, Globe } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { terms } from '@/data/courseData';
import { SourceBadge } from '@/components/SourceBadge';
import type { SourceRef } from '@/types';

interface OutletContext {
  openSource: (source: SourceRef) => void;
}

export function TermsPage() {
  const { openSource } = useOutletContext<OutletContext>();
  const [search, setSearch] = useState('');

  const filtered = terms.filter(t =>
    t.term.toLowerCase().includes(search.toLowerCase()) ||
    t.meaning.toLowerCase().includes(search.toLowerCase()) ||
    t.explanation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">المصطلحات</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">قاموس المصطلحات الإنجليزية مع المعاني والشرح</p>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="ابحث في المصطلحات..."
            className="w-full pr-10 pl-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((term, index) => (
              <motion.div
                key={term.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.03 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">{term.term}</h3>
                      <span className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-sm font-medium">
                        {term.meaning}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{term.explanation}</p>
                    <div className="mt-3">
                      <SourceBadge source={term.source} onClick={openSource} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Layers className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>لا توجد مصطلحات مطابقة للبحث</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
