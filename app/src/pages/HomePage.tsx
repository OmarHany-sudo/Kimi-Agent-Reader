import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen, FileText, Layers, HelpCircle, Lightbulb,
  ArrowLeft, Radio, Monitor, Newspaper, Users, Cpu
} from 'lucide-react';
import { courseInfo, units } from '@/data/courseData';

const stats = [
  { label: 'ملف PDF', value: courseInfo.fileCount, icon: FileText, color: 'from-blue-500 to-cyan-500' },
  { label: 'وحدة دراسية', value: courseInfo.unitCount, icon: Layers, color: 'from-emerald-500 to-teal-500' },
  { label: 'سؤال مراجعة', value: courseInfo.questionCount, icon: HelpCircle, color: 'from-orange-500 to-amber-500' },
];

const quickLinks = [
  { path: '/units', label: 'الوحدات الدراسية', desc: 'تصفح المحتوى المنظم', icon: BookOpen, color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' },
  { path: '/concepts', label: 'المفاهيم المهمة', desc: 'أهم المفاهيم في المادة', icon: Lightbulb, color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' },
  { path: '/quiz', label: 'اختبار تفاعلي', desc: 'اختبر معلوماتك', icon: HelpCircle, color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' },
  { path: '/flashcards', label: 'بطاقات المراجعة', desc: 'راجع بسرعة', icon: Layers, color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' },
];

const unitIcons = [Radio, Monitor, Newspaper, Users, Cpu, BookOpen];

export function HomePage() {
  return (
    <div dir="rtl" className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 15, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-2xl mb-6"
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {courseInfo.title}
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
              منصة مراجعة شاملة تضم الملخصات، المفاهيم، التعريفات، بنك الأسئلة،
              والاختبارات التفاعلية - كل ما تحتاجه للتميز في المادة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/units"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                ابدأ المراجعة
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 bg-emerald-700/50 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700/70 transition-colors border border-white/20"
              >
                اختبر نفسك
                <HelpCircle className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">وصول سريع</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Link
                to={link.path}
                className="block bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800 transition-all group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${link.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{link.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{link.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Units Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">الوحدات الدراسية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {units.map((unit, index) => {
            const Icon = unitIcons[index] || BookOpen;
            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link
                  to={`/units/${unit.id}`}
                  className="block bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800 transition-all group h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">{unit.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{unit.description}</p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-2">
                        {unit.chapters.length} فصول
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
