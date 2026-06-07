import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Search, X, CheckCircle, XCircle, ChevronDown, Filter } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { questions } from '@/data/courseData';
import { SourceBadge } from '@/components/SourceBadge';
import type { SourceRef, Question } from '@/types';

interface OutletContext {
  openSource: (source: SourceRef) => void;
}

const typeLabels: Record<string, string> = {
  true_false: 'صح أو خطأ',
  multiple_choice: 'اختر من متعدد',
  fill_blank: 'أكمل',
  short_answer: 'إجابة قصيرة',
  essay: 'مقالي',
};

const typeColors: Record<string, string> = {
  true_false: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400',
  multiple_choice: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400',
  fill_blank: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400',
  short_answer: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400',
  essay: 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400',
};

export function QuestionsPage() {
  const { openSource } = useOutletContext<OutletContext>();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = questions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || q.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">بنك الأسئلة</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">مجموعة أسئلة شاملة من المنهج</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="ابحث في الأسئلة..."
              className="w-full pr-10 pl-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="relative">
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="pr-10 pl-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer min-w-[160px]"
            >
              <option value="all">كل الأنواع</option>
              {Object.entries(typeLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((q, index) => (
              <motion.div
                key={q.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.03 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                  className="w-full p-5 flex items-start justify-between text-right hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${typeColors[q.type]}`}>
                        {typeLabels[q.type]}
                      </span>
                    </div>
                    <p className="text-gray-900 dark:text-white font-medium text-right">
                      {q.question}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === q.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="mr-3 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedId === q.id && <QuestionDetail question={q} openSource={openSource} />}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <HelpCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>لا توجد أسئلة مطابقة</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

function QuestionDetail({ question, openSource }: { question: Question; openSource: (s: SourceRef) => void }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden"
    >
      <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800 pt-4 space-y-3">
        {/* Options for multiple choice */}
        {question.type === 'multiple_choice' && question.options && (
          <div className="space-y-2">
            {question.options.map((opt, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg border ${
                  showAnswer && opt === question.correctAnswer
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700'
                    : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                }`}
              >
                <span className="text-gray-800 dark:text-gray-200">{opt}</span>
                {showAnswer && opt === question.correctAnswer && (
                  <CheckCircle className="inline-block w-4 h-4 text-emerald-600 mr-2" />
                )}
              </div>
            ))}
          </div>
        )}

        {/* True/False indicators */}
        {question.type === 'true_false' && showAnswer && (
          <div className="flex items-center gap-2">
            {question.correctAnswer === true ? (
              <>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">صحيح</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-600" />
                <span className="text-red-700 dark:text-red-400 font-medium">خطأ</span>
              </>
            )}
          </div>
        )}

        {/* Fill blank answer */}
        {question.type === 'fill_blank' && showAnswer && question.correctAnswer && (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <p className="text-emerald-800 dark:text-emerald-300 font-medium">
              {String(question.correctAnswer)}
            </p>
          </div>
        )}

        {/* Short answer / Essay */}
        {(question.type === 'short_answer' || question.type === 'essay') && showAnswer && question.answer && (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-900 dark:text-blue-300 leading-relaxed">{question.answer}</p>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
          >
            {showAnswer ? 'إخفاء الإجابة' : 'إظهار الإجابة'}
          </button>
          <SourceBadge source={question.source} onClick={openSource} />
        </div>
      </div>
    </motion.div>
  );
}
