// Core content types
export interface SourceRef {
  file: string;
  page: number;
  text: string;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface ContentBlock {
  type: 'paragraph' | 'list' | 'heading' | 'important' | 'note';
  text?: string;
  items?: string[];
  source: SourceRef;
}

export interface Concept {
  id: string;
  term: string;
  explanation: string;
  source: SourceRef;
}

export interface Definition {
  id: string;
  term: string;
  definition: string;
  source: SourceRef;
}

export interface TermEntry {
  id: string;
  term: string;
  meaning: string;
  explanation: string;
  source: SourceRef;
}

export interface Question {
  id: string;
  type: 'true_false' | 'multiple_choice' | 'fill_blank' | 'short_answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer?: string | boolean;
  answer?: string;
  source: SourceRef;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  source: SourceRef;
}

export interface Exam {
  id: string;
  title: string;
  year?: string;
  questions: Question[];
}

export interface ExpectedQuestion {
  id: string;
  question: string;
  reason: string;
  filesUsed: string[];
  pagesUsed: number[];
}

export interface RevisionItem {
  id: string;
  title: string;
  content: string;
  category: 'definition' | 'concept' | 'point' | 'question';
  source: SourceRef;
}

export interface SearchResult {
  item: any;
  score: number;
  matches: any[];
  type: string;
}
