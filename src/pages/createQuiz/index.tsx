import { FC, useState } from "react";
import AddQuestion from "./addQuestion";
import { IQuestion } from "../../interfaces";
import QuestionsList from "./questionsList";

const data = Array.from({ length: 23 }).map((_, i) => ({
  des: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  correct: i,
  answers: [
    "ly a series of design principles, practical patterns and high quality desig.",
    "ly a series of design principles, practical patterns and high quality desig.",
    "ly a series of design principles, practical patterns and high quality desig.",
    "ly a series of design principles, practical patterns and high quality desig.",
  ],
}));

const CreateQuiz: FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>(data);

  const addQues = (data: IQuestion) => {
    setQuestions([data, ...questions]);
  };

  const removeQues = (index: number) => {
    const newData = questions;
    newData.splice(index, 1);

    setQuestions([...newData]);
  };

  return (
    <>
      <AddQuestion add={addQues} />

      <QuestionsList questions={questions} remove={removeQues} />
    </>
  );
};

export default CreateQuiz;
