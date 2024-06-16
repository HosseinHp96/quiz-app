import { createContext, useState, FC } from "react";
import { IQuiz, IAppContext } from "../interfaces";

export const AppContext = createContext<IAppContext | null>(null);

export const AppContextWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([test, test, test]);

  const sharedState = {
    quizzes,
    setQuizzes,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const AppConsumer = AppContext.Consumer;

const test = {
  name: "Test Quiz",
  des: ' "this is a test quiz',
  count: 10,
  questions: [
    {
      des: "Is this question 1?",
      correct: 1,
      answers: ["yes", "no", "both", "maybe"],
    },
    {
      des: "Is this question 1?",
      correct: 1,
      answers: ["yes", "no", "both", "maybe"],
    },
    {
      des: "Is this question 1?",
      correct: 1,
      answers: ["yes", "no", "both", "maybe"],
    },
    // {
    //   des: "Is this question 1?",
    //   correct: 1,
    //   answers: ["yes", "no", "both", "maybe"],
    // },
    // {
    //   des: "Is this question 1?",
    //   correct: 1,
    //   answers: ["yes", "no", "both", "maybe"],
    // },
    // {
    //   des: "Is this question 1?",
    //   correct: 1,
    //   answers: ["yes", "no", "both", "maybe"],
    // },
    // {
    //   des: "Is this question 1?",
    //   correct: 1,
    //   answers: ["yes", "no", "both", "maybe"],
    // },
    // {
    //   des: "Is this question 1?",
    //   correct: 1,
    //   answers: ["yes", "no", "both", "maybe"],
    // },
    // {
    //   des: "Is this question 1?",
    //   correct: 1,
    //   answers: ["yes", "no", "both", "maybe"],
    // },
    // {
    //   des: "Is this question 1?",
    //   correct: 1,
    //   answers: ["yes", "no", "both", "maybe"],
    // },
  ],
};
