import { BookOpen, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-1.5 rounded-lg">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 dark:text-white">
              الحاسوب والإذاعة
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            مادة الحاسوب والإذاعة - منصة مراجعة شاملة
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <span>بنكمالحب</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
