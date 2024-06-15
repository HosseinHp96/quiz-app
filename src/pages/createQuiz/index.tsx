import { FC, useState } from "react";
import AddQuestion from "./addQuestion";
import { IQuestion } from "../../interfaces";
import QuestionsList from "./questionsList";
import { Button, Col, Flex, Row } from "antd";

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
      <Row justify="center">
        <Col span={22}>
          <Flex gap="small" wrap>
            <Button type="primary">Create Quiz</Button>

            <AddQuestion add={addQues} />
          </Flex>
        </Col>
      </Row>

      <QuestionsList questions={questions} remove={removeQues} />
    </>
  );
};

export default CreateQuiz;
