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
  name: "Computer Fundamental",
  des: "Here are 20 MCQs on Computer Fundamental",
  count: 20,
  questions: [
    {
      des: "Who is the father of Computers?",
      correct: 1,
      answers: [
        "James Gosling",
        "Charles Babbage",
        "Dennis Ritchie",
        "Bjarne Stroustrup",
      ],
    },
    {
      des: "Which of the following is the correct abbreviation of COMPUTER?",
      correct: 3,
      answers: [
        "Commonly Occupied Machines Used in Technical and Educational Research",
        "Commonly Operated Machines Used in Technical and Environmental Research",
        "Commonly Oriented Machines Used in Technical and Educational Research",
        "Commonly Operated Machines Used in Technical and Educational Research",
      ],
    },
    {
      des: "Which of the following is the correct definition of Computer?",
      correct: 3,
      answers: [
        "Computer is a machine or device that can be programmed to perform arithmetical or logic operation sequences automatically",
        "Computer understands only binary language which is written in the form of 0s & 1s",
        "Computer is a programmable electronic device that stores, retrieves, and processes the data",
        "All of the mentioned",
      ],
    },
    {
      des: "What is the full form of CPU?",
      correct: 2,
      answers: [
        "Computer Processing Unit",
        "Computer Principle Unit",
        "Central Processing Unit",
        "Control Processing Unit",
      ],
    },
    {
      des: "Which of the following is the brain of the computer?",
      correct: 0,
      answers: [
        "Central Processing Unit",
        "Memory",
        "Arithmetic and Logic unit",
        "Control unit",
      ],
    },
    {
      des: "Who is the father of Computers?",
      correct: 1,
      answers: [
        "James Gosling",
        "Charles Babbage",
        "Dennis Ritchie",
        "Bjarne Stroustrup",
      ],
    },
    {
      des: "Which of the following is the correct abbreviation of COMPUTER?",
      correct: 3,
      answers: [
        "Commonly Occupied Machines Used in Technical and Educational Research",
        "Commonly Operated Machines Used in Technical and Environmental Research",
        "Commonly Oriented Machines Used in Technical and Educational Research",
        "Commonly Operated Machines Used in Technical and Educational Research",
      ],
    },
    {
      des: "Which of the following is the correct definition of Computer?",
      correct: 3,
      answers: [
        "Computer is a machine or device that can be programmed to perform arithmetical or logic operation sequences automatically",
        "Computer understands only binary language which is written in the form of 0s & 1s",
        "Computer is a programmable electronic device that stores, retrieves, and processes the data",
        "All of the mentioned",
      ],
    },
    {
      des: "What is the full form of CPU?",
      correct: 2,
      answers: [
        "Computer Processing Unit",
        "Computer Principle Unit",
        "Central Processing Unit",
        "Control Processing Unit",
      ],
    },
    {
      des: "Which of the following is the brain of the computer?",
      correct: 0,
      answers: [
        "Central Processing Unit",
        "Memory",
        "Arithmetic and Logic unit",
        "Control unit",
      ],
    },
    {
      des: "Who is the father of Computers?",
      correct: 1,
      answers: [
        "James Gosling",
        "Charles Babbage",
        "Dennis Ritchie",
        "Bjarne Stroustrup",
      ],
    },
    {
      des: "Which of the following is the correct abbreviation of COMPUTER?",
      correct: 3,
      answers: [
        "Commonly Occupied Machines Used in Technical and Educational Research",
        "Commonly Operated Machines Used in Technical and Environmental Research",
        "Commonly Oriented Machines Used in Technical and Educational Research",
        "Commonly Operated Machines Used in Technical and Educational Research",
      ],
    },
    {
      des: "Which of the following is the correct definition of Computer?",
      correct: 3,
      answers: [
        "Computer is a machine or device that can be programmed to perform arithmetical or logic operation sequences automatically",
        "Computer understands only binary language which is written in the form of 0s & 1s",
        "Computer is a programmable electronic device that stores, retrieves, and processes the data",
        "All of the mentioned",
      ],
    },
    {
      des: "What is the full form of CPU?",
      correct: 2,
      answers: [
        "Computer Processing Unit",
        "Computer Principle Unit",
        "Central Processing Unit",
        "Control Processing Unit",
      ],
    },
    {
      des: "Which of the following is the brain of the computer?",
      correct: 0,
      answers: [
        "Central Processing Unit",
        "Memory",
        "Arithmetic and Logic unit",
        "Control unit",
      ],
    },
    {
      des: "Who is the father of Computers?",
      correct: 1,
      answers: [
        "James Gosling",
        "Charles Babbage",
        "Dennis Ritchie",
        "Bjarne Stroustrup",
      ],
    },
    {
      des: "Which of the following is the correct abbreviation of COMPUTER?",
      correct: 3,
      answers: [
        "Commonly Occupied Machines Used in Technical and Educational Research",
        "Commonly Operated Machines Used in Technical and Environmental Research",
        "Commonly Oriented Machines Used in Technical and Educational Research",
        "Commonly Operated Machines Used in Technical and Educational Research",
      ],
    },
    {
      des: "Which of the following is the correct definition of Computer?",
      correct: 3,
      answers: [
        "Computer is a machine or device that can be programmed to perform arithmetical or logic operation sequences automatically",
        "Computer understands only binary language which is written in the form of 0s & 1s",
        "Computer is a programmable electronic device that stores, retrieves, and processes the data",
        "All of the mentioned",
      ],
    },
    {
      des: "What is the full form of CPU?",
      correct: 2,
      answers: [
        "Computer Processing Unit",
        "Computer Principle Unit",
        "Central Processing Unit",
        "Control Processing Unit",
      ],
    },
    {
      des: "Which of the following is the brain of the computer?",
      correct: 0,
      answers: [
        "Central Processing Unit",
        "Memory",
        "Arithmetic and Logic unit",
        "Control unit",
      ],
    },
  ],
};
