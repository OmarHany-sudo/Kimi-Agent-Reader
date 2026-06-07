import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlipHorizontal, ChevronLeft, ChevronRight, RotateCcw, Layers } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { flashcards } from '@/data/courseData';
import { SourceBadge } from '@/components/SourceBadge';
import type { SourceRef } from '@/types';

interface OutletContext {
  openSource: (source: SourceRef) => void;
}

export function FlashcardsPage() {
  const { openSource } = useOutletContext<OutletContext>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const card = flashcards[currentIndex];

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setDirection(1);
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 150);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev - 1), 150);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div dir="rtl" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
            <FlipHorizontal className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">بطاقات المراجعة</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">اضغط على البطاقة لتقلبها</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            البطاقة {currentIndex + 1} من {flashcards.length}
          </span>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-emerald-600 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            إعادة
          </button>
        </div>

        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-8">
          <motion.div
            className="h-full bg-gradient-to-l from-violet-500 to-purple-500"
            animate={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Card */}
        <div className="relative h-80 mb-8">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
              style={{ perspective: 1000 }}
            >
              <motion.div
                onClick={() => setIsFlipped(!isFlipped)}
                className="relative w-full h-full cursor-pointer"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-8 flex flex-col items-center justify-center text-white shadow-lg"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Layers className="w-8 h-8 mb-4 opacity-60" />
                  <p className="text-xl font-bold text-center leading-relaxed">{card.front}</p>
                  <p className="text-sm text-purple-200 mt-4">اضغط لعرض الإجابة</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg border border-gray-100 dark:border-gray-800"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <p className="text-lg text-gray-800 dark:text-gray-200 text-center leading-relaxed mb-4">
                    {card.back}
                  </p>
                  <div onClick={e => e.stopPropagation()}>
                    <SourceBadge source={card.source} onClick={openSource} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleNext}
            disabled={currentIndex === flashcards.length - 1}
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 min-w-[80px] text-center">
            {currentIndex + 1} / {flashcards.length}
          </span>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
