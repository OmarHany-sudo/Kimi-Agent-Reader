import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookMarked, Search, X, BookOpen } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { definitions } from '@/data/courseData';
import { SourceBadge } from '@/components/SourceBadge';
import type { SourceRef } from '@/types';

interface OutletContext {
  openSource: (source: SourceRef) => void;
}

export function DefinitionsPage() {
  const { openSource } = useOutletContext<OutletContext>();
  const [search, setSearch] = useState('');

  const filtered = definitions.filter(d =>
    d.term.toLowerCase().includes(search.toLowerCase()) ||
    d.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
            <BookMarked className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">التعريفات</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">التعريفات الأساسية في المادة</p>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="ابحث في التعريفات..."
            className="w-full pr-10 pl-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((def, index) => (
              <motion.div
                key={def.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.03 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{def.term}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{def.definition}</p>
                    <div className="mt-3">
                      <SourceBadge source={def.source} onClick={openSource} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <BookMarked className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>لا توجد تعريفات مطابقة للبحث</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
