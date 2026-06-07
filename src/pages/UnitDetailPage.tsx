import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ChevronLeft } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { units } from '@/data/courseData';
import { SourceBadge } from '@/components/SourceBadge';
import type { SourceRef } from '@/types';

interface OutletContext {
  openSource: (source: SourceRef) => void;
}

export function UnitDetailPage() {
  const { unitId } = useParams<{ unitId: string }>();
  const { openSource } = useOutletContext<OutletContext>();

  const unit = units.find(u => u.id === unitId);

  if (!unit) {
    return (
      <div dir="rtl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">الوحدة غير موجودة</h1>
        <Link to="/units" className="text-emerald-600 hover:underline mt-4 inline-block">
          العودة للوحدات
        </Link>
      </div>
    );
  }

  return (
    <div dir="rtl" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          to="/units"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-emerald-600 transition-colors mb-6"
        >
          <ArrowRight className="w-4 h-4" />
          العودة للوحدات
        </Link>

        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-2">{unit.title}</h1>
          <p className="text-emerald-100">{unit.description}</p>
        </div>

        <div className="space-y-6">
          {unit.chapters.map((chapter, chIndex) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: chIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  {chapter.title}
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {chapter.content.map((block, bIndex) => (
                  <div key={bIndex}>
                    {block.type === 'heading' && (
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3">
                        {block.text}
                      </h3>
                    )}
                    {block.type === 'paragraph' && (
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                        {block.text}
                      </p>
                    )}
                    {block.type === 'important' && (
                      <div className="bg-amber-50 dark:bg-amber-900/20 border-r-4 border-amber-500 p-4 rounded-lg my-4">
                        <p className="text-amber-900 dark:text-amber-300 font-medium">
                          {block.text}
                        </p>
                      </div>
                    )}
                    {block.type === 'note' && (
                      <div className="bg-blue-50 dark:bg-blue-900/20 border-r-4 border-blue-500 p-4 rounded-lg my-4">
                        <p className="text-blue-900 dark:text-blue-300">
                          {block.text}
                        </p>
                      </div>
                    )}
                    {block.type === 'list' && block.items && (
                      <ul className="space-y-2 my-4">
                        {block.items.map((item, iIndex) => (
                          <li
                            key={iIndex}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <ChevronLeft className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-2">
                      <SourceBadge source={block.source} onClick={openSource} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
