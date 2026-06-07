import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Search, X, ChevronDown } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { concepts } from '@/data/courseData';
import { SourceBadge } from '@/components/SourceBadge';
import type { SourceRef } from '@/types';

interface OutletContext {
  openSource: (source: SourceRef) => void;
}

export function ConceptsPage() {
  const { openSource } = useOutletContext<OutletContext>();
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = concepts.filter(c =>
    c.term.toLowerCase().includes(search.toLowerCase()) ||
    c.explanation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">المفاهيم المهمة</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">أهم المفاهيم في المادة مع الشرح والمصادر</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="ابحث في المفاهيم..."
            className="w-full pr-10 pl-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Concepts List */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((concept, index) => (
              <motion.div
                key={concept.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.03 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedId(expandedId === concept.id ? null : concept.id)}
                  className="w-full p-5 flex items-center justify-between text-right hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">{concept.term}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === concept.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedId === concept.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800 pt-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                          {concept.explanation}
                        </p>
                        <SourceBadge source={concept.source} onClick={openSource} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Lightbulb className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>لا توجد مفاهيم مطابقة للبحث</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
