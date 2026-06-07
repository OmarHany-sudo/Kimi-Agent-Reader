import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCheck, ArrowLeft, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { questions } from '@/data/courseData';
import { SourceBadge } from '@/components/SourceBadge';
import type { SourceRef } from '@/types';

interface OutletContext {
  openSource: (source: SourceRef) => void;
}

export function QuizPage() {
  const { openSource } = useOutletContext<OutletContext>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  // Filter valid quiz questions
  const quizQuestions = questions.filter(q =>
    q.type === 'multiple_choice' || q.type === 'true_false'
  );

  const currentQuestion = quizQuestions[currentIndex];

  const handleAnswer = useCallback((answer: string | boolean) => {
    if (answered) return;
    setSelectedAnswer(answer);
    setAnswered(true);
    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) setScore(prev => prev + 1);
  }, [answered, currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setQuizComplete(true);
    }
  }, [currentIndex, quizQuestions.length]);

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswered(false);
    setQuizComplete(false);
  };

  if (quizQuestions.length === 0) {
    return (
      <div dir="rtl" className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p>لا توجد أسئلة متاحة للاختبار</p>
      </div>
    );
  }

  if (quizComplete) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div dir="rtl" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">انتهى الاختبار!</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            لقد أكملت {quizQuestions.length} سؤال
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6 inline-block">
            <p className="text-5xl font-bold text-emerald-600 mb-2">{percentage}%</p>
            <p className="text-gray-600 dark:text-gray-400">
              {score} صحيحة من {quizQuestions.length}
            </p>
          </div>
          <div className="flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              إعادة الاختبار
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div dir="rtl" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
            <FileCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">اختبار تفاعلي</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              السؤال {currentIndex + 1} من {quizQuestions.length}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-l from-emerald-500 to-teal-500"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Score */}
        <div className="mb-4 text-left">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
            <Trophy className="w-4 h-4" />
            النقاط: {score} / {quizQuestions.length}
          </span>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <p className="text-lg font-medium text-gray-900 dark:text-white mb-6 leading-relaxed">
              {currentQuestion.question}
            </p>

            {/* Multiple Choice */}
            {currentQuestion.type === 'multiple_choice' && currentQuestion.options && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  let btnClass = 'w-full p-4 rounded-xl border text-right font-medium transition-all ';
                  if (answered) {
                    if (option === currentQuestion.correctAnswer) {
                      btnClass += 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300';
                    } else if (option === selectedAnswer) {
                      btnClass += 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700 text-red-800 dark:text-red-300';
                    } else {
                      btnClass += 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-500';
                    }
                  } else {
                    btnClass += 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10';
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      disabled={answered}
                      className={btnClass}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {answered && option === currentQuestion.correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        )}
                        {answered && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* True/False */}
            {currentQuestion.type === 'true_false' && (
              <div className="flex gap-3">
                {[true, false].map((val) => {
                  let btnClass = 'flex-1 p-4 rounded-xl border text-center font-bold transition-all ';
                  if (answered) {
                    if (val === currentQuestion.correctAnswer) {
                      btnClass += 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300';
                    } else if (val === selectedAnswer) {
                      btnClass += 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700 text-red-800 dark:text-red-300';
                    } else {
                      btnClass += 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500';
                    }
                  } else {
                    btnClass += 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-emerald-300 dark:hover:border-emerald-700';
                  }
                  return (
                    <button
                      key={String(val)}
                      onClick={() => handleAnswer(val)}
                      disabled={answered}
                      className={btnClass}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {val ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                        {val ? 'صح' : 'خطأ'}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Feedback */}
            <AnimatePresence>
              {answered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4"
                >
                  <div className={`p-4 rounded-xl ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800' : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'}`}>
                    <p className={`font-medium ${isCorrect ? 'text-emerald-800 dark:text-emerald-300' : 'text-red-800 dark:text-red-300'}`}>
                      {isCorrect ? 'إجابة صحيحة!' : 'إجابة خاطئة!'}
                    </p>
                  </div>
                  <div className="mt-3">
                    <SourceBadge source={currentQuestion.source} onClick={openSource} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next Button */}
            {answered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-left"
              >
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  {currentIndex < quizQuestions.length - 1 ? 'السؤال التالي' : 'عرض النتيجة'}
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
