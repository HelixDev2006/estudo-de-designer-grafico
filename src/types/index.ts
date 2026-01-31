export type CourseLevel = 'iniciante' | 'intermediario' | 'avancado';

export type CourseCategory =
  | 'cores'
  | 'tipografia'
  | 'layout'
  | 'composicao'
  | 'ilustracao'
  | 'fotografia'
  | 'web';

export interface Course {
  id: string;
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  level: CourseLevel;
  category: CourseCategory;
  duration: number; // em minutos
  lessonCount: number;
  rating: number; // 0-5
  ratingCount: number;
  instructor: string;
  learningObjectives: string[];
  prerequisites: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  slug: string;
  order: number;
  duration: number; // em minutos
  content: string;
  videoUrl?: string;
  resources: Resource[];
  quiz?: Quiz;
  completed?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'image' | 'code' | 'link';
  url: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  passingScore: number; // percentage
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  favorites: string[]; // course IDs
  progress: Record<string, number>; // courseId -> progress percentage
  completedCourses: string[];
  accessibilitySettings: AccessibilitySettings;
}

export interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'x-large' | 'xx-large';
  highContrast: boolean;
  reducedMotion: boolean;
  dyslexiaFont: boolean;
  increasedLetterSpacing: boolean;
  increasedLineHeight: boolean;
  theme: 'light' | 'dark' | 'auto';
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'colors' | 'typography' | 'layout' | 'images';
  url: string;
  icon?: string;
}

export interface DesignConcept {
  id: string;
  term: string;
  definition: string;
  category: string;
  examples: string[];
  relatedTerms: string[];
}
