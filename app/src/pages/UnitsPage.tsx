import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ChevronLeft, Layers } from 'lucide-react';
import { units } from '@/data/courseData';

const unitColors = [
  'from-emerald-500 to-teal-600',
  'from-blue-500 to-cyan-600',
  'from-orange-500 to-amber-600',
  'from-purple-500 to-violet-600',
  'from-rose-500 to-pink-600',
  'from-indigo-500 to-blue-600',
];

export function UnitsPage() {
  return (
    <div dir="rtl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">الوحدات الدراسية</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">تصفح المحتوى الدراسي المنظم</p>
          </div>
        </div>

        <div className="space-y-4">
          {units.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/units/${unit.id}`}
                className="block bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-800 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${unitColors[index]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {unit.title}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">{unit.description}</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-emerald-600 dark:text-emerald-400">
                        <Layers className="w-4 h-4" />
                        <span>{unit.chapters.length} فصول</span>
                      </div>
                    </div>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
