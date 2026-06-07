import { X, FileText, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SourceRef } from '@/types';

interface SourceModalProps {
  source: SourceRef | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SourceModal({ source, isOpen, onClose }: SourceModalProps) {
  if (!source) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-200 dark:border-gray-700"
            onClick={e => e.stopPropagation()}
            dir="rtl"
          >
            {/* Header */}
            <div className="bg-gradient-to-l from-emerald-600 to-teal-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">المصدر</h3>
              </div>
              <button
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-lg"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* File Name */}
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                <FileText className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">اسم الملف</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{source.file}</p>
                </div>
              </div>

              {/* Page Number */}
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                <FileText className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">رقم الصفحة</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{source.page}</p>
                </div>
              </div>

              {/* Original Text */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-emerald-600" />
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-400">النص الأصلي المستخرج</p>
                </div>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                  {source.text}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={onClose}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                إغلاق
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
