import { FC } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../utils";
import QuestionCards from "./questionCards";

const TakeQuiz: FC = () => {
  const { id } = useParams();

  const { quizzes } = useAppContext();

  const selectedQuiz = quizzes[Number(id)];

  const finishQuiz = (data: object) => {
    console.log(data);
  };

  return (
    <>
      <QuestionCards
        questions={selectedQuiz.questions}
        finishQuiz={finishQuiz}
      />
    </>
  );
};

export default TakeQuiz;
