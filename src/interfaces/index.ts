// Questions
export interface IQuestion {
  des: string;
  answers: string[];
  correct: number;
}

export interface IAddQuestionForm {
  ans1: string;
  ans2: string;
  ans3: string;
  ans4: string;
  correct: number;
  des: string;
}

// Quizzes
export interface IQuizInfoForm {
  name: string;
  des: string;
}

export interface IQuiz extends IQuizInfoForm {
  questions: IQuestion[];
  count: number;
}

export interface ITakeQuizFromFieldRes {
  correctAnswer: number;
  selectedAnswer: number;
}

export interface IQuizResult {
  totalCount: number;
  correctCount: number;
  wrongCount: number;
}

// Context
export interface IAppContext {
  quizzes: IQuiz[];
  setQuizzes: React.Dispatch<React.SetStateAction<IQuiz[]>>;
}
