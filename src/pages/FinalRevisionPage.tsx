import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Lightbulb, HelpCircle, ChevronDown } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { concepts, definitions, questions } from '@/data/courseData';
import { SourceBadge } from '@/components/SourceBadge';
import type { SourceRef } from '@/types';

interface OutletContext {
  openSource: (source: SourceRef) => void;
}

const tabs = [
  { id: 'definitions', label: 'التعريفات', icon: BookOpen },
  { id: 'concepts', label: 'المفاهيم', icon: Lightbulb },
  { id: 'questions', label: 'الأسئلة', icon: HelpCircle },
];

export function FinalRevisionPage() {
  const { openSource } = useOutletContext<OutletContext>();
  const [activeTab, setActiveTab] = useState('definitions');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">المراجعة النهائية</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">جميع النقاط المهمة في مكان واحد</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-3">
          {activeTab === 'definitions' && definitions.map((def, index) => (
            <motion.div
              key={def.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{def.term}</h3>
              <p className="text-gray-700 dark:text-gray-300">{def.definition}</p>
              <div className="mt-2">
                <SourceBadge source={def.source} onClick={openSource} />
              </div>
            </motion.div>
          ))}

          {activeTab === 'concepts' && concepts.map((concept, index) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{concept.term}</h3>
              <p className="text-gray-700 dark:text-gray-300">{concept.explanation}</p>
              <div className="mt-2">
                <SourceBadge source={concept.source} onClick={openSource} />
              </div>
            </motion.div>
          ))}

          {activeTab === 'questions' && questions.filter(q => q.type === 'true_false' || q.type === 'multiple_choice').map((q, index) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                className="w-full p-5 flex items-center justify-between text-right"
              >
                <p className="text-gray-900 dark:text-white font-medium">{q.question}</p>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedId === q.id ? 'rotate-180' : ''}`} />
              </button>
              {expandedId === q.id && (
                <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800 pt-3">
                  {q.options && (
                    <div className="space-y-2 mb-3">
                      {q.options.map((opt, i) => (
                        <div
                          key={i}
                          className={`p-2 rounded-lg ${opt === q.correctAnswer ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300' : 'bg-gray-50 dark:bg-gray-800'}`}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                  {q.type === 'true_false' && (
                    <p className="text-emerald-700 dark:text-emerald-400 font-medium mb-3">
                      {q.correctAnswer === true ? 'صحيح' : 'خطأ'}
                    </p>
                  )}
                  <SourceBadge source={q.source} onClick={openSource} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
