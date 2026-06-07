import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoonStar, Lightbulb, AlertCircle, ChevronDown, Star, Clock } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { expectedQuestions, concepts, definitions } from '@/data/courseData';
import { SourceBadge } from '@/components/SourceBadge';
import type { SourceRef } from '@/types';

interface OutletContext {
  openSource: (source: SourceRef) => void;
}

export function ExamNightPage() {
  const { openSource } = useOutletContext<OutletContext>();
  const [expandedEq, setExpandedEq] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'expected' | 'concepts' | 'definitions'>('expected');

  const sections = [
    { id: 'expected' as const, label: 'أسئلة متوقعة', icon: Star },
    { id: 'concepts' as const, label: 'مفاهيم سريعة', icon: Lightbulb },
    { id: 'definitions' as const, label: 'تعريفات', icon: AlertCircle },
  ];

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Hero */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
          >
            <MoonStar className="w-8 h-8" />
          </motion.div>
          <h1 className="text-3xl font-bold mb-2">ملخص ليلة الامتحان</h1>
          <p className="text-indigo-100">أهم المعلومات والأسئلة المتوقعة</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-indigo-200">
            <Clock className="w-4 h-4" />
            <span>راجع هذه النقاط قبل الامتحان</span>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
                activeSection === section.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <section.icon className="w-4 h-4" />
              {section.label}
            </button>
          ))}
        </div>

        {/* Expected Questions */}
        <AnimatePresence mode="wait">
          {activeSection === 'expected' && (
            <motion.div
              key="expected"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-4">
                <p className="text-amber-800 dark:text-amber-300 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  هذه الأسئلة متوقعة بناءً على تكرار المواضيع وأهميتها في المنهج
                </p>
              </div>
              {expectedQuestions.map((eq, index) => (
                <motion.div
                  key={eq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedEq(expandedEq === eq.id ? null : eq.id)}
                    className="w-full p-5 flex items-start justify-between text-right hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="font-medium text-gray-900 dark:text-white">{eq.question}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedEq === eq.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 mr-2"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedEq === eq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800 pt-4 space-y-3">
                          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                            <p className="text-sm font-medium text-purple-800 dark:text-purple-300 mb-1">سبب التوقع</p>
                            <p className="text-purple-700 dark:text-purple-400 text-sm">{eq.reason}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {eq.filesUsed.map((file, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-600 dark:text-gray-400">
                                {file}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === 'concepts' && (
            <motion.div
              key="concepts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {concepts.slice(0, 6).map((concept, index) => (
                <motion.div
                  key={concept.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{concept.term}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{concept.explanation}</p>
                  <div className="mt-2">
                    <SourceBadge source={concept.source} onClick={openSource} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === 'definitions' && (
            <motion.div
              key="definitions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {definitions.map((def, index) => (
                <motion.div
                  key={def.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{def.term}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{def.definition}</p>
                  <div className="mt-2">
                    <SourceBadge source={def.source} onClick={openSource} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
