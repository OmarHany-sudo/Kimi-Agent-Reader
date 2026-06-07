import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { UnitsPage } from '@/pages/UnitsPage';
import { UnitDetailPage } from '@/pages/UnitDetailPage';
import { ConceptsPage } from '@/pages/ConceptsPage';
import { DefinitionsPage } from '@/pages/DefinitionsPage';
import { TermsPage } from '@/pages/TermsPage';
import { QuestionsPage } from '@/pages/QuestionsPage';
import { QuizPage } from '@/pages/QuizPage';
import { FlashcardsPage } from '@/pages/FlashcardsPage';
import { FinalRevisionPage } from '@/pages/FinalRevisionPage';
import { ExamNightPage } from '@/pages/ExamNightPage';
import { SearchPage } from '@/pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/units" element={<UnitsPage />} />
          <Route path="/units/:unitId" element={<UnitDetailPage />} />
          <Route path="/concepts" element={<ConceptsPage />} />
          <Route path="/definitions" element={<DefinitionsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/final-revision" element={<FinalRevisionPage />} />
          <Route path="/exam-night" element={<ExamNightPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
