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
