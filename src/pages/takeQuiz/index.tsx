import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../utils";
import QuestionCards from "./questionCards";
import ResultCard from "./resultCard";
import { ITakeQuizFromFieldRes, IQuizResult } from "../../interfaces";

const TakeQuiz: FC = () => {
  const { id } = useParams();

  const { quizzes } = useAppContext();

  const [result, setResult] = useState<IQuizResult | null>(null);

  const selectedQuiz = quizzes[Number(id)];

  const finishQuiz = (data: Record<string, ITakeQuizFromFieldRes>) => {
    let correctCount = 0;
    let wrongCount = 0;

    for (const key in data) {
      const { correctAnswer, selectedAnswer } = data[key];
      if (correctAnswer === selectedAnswer) correctCount = correctCount + 1;
      else wrongCount = wrongCount + 1;
    }

    setResult({
      totalCount: selectedQuiz.count,
      wrongCount,
      correctCount,
    });
  };

  const TakeQuizAgain = () => {
    setResult(null);
  };

  return (
    <>
      {result ? (
        <ResultCard result={result} TakeQuizAgain={TakeQuizAgain} />
      ) : (
        <QuestionCards
          questions={selectedQuiz.questions}
          finishQuiz={finishQuiz}
        />
      )}
    </>
  );
};

export default TakeQuiz;
