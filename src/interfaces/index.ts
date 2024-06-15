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

// Quizzed
export interface IQuiz {
  questions: IQuestion[];
  count: number;
  name: string;
}

export interface IQuizNameForm {
  name: string;
}

// Context
export interface IAppContext {
  quizzes: IQuiz[];
  setQuizzes: React.Dispatch<React.SetStateAction<IQuiz[]>>;
}
