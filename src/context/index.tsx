import { createContext, useState, FC } from "react";
import { IQuiz, IAppContext } from "../interfaces";

export const AppContext = createContext<IAppContext | null>(null);

export const AppContextWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);

  const sharedState = {
    quizzes,
    setQuizzes,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export const AppConsumer = AppContext.Consumer;
