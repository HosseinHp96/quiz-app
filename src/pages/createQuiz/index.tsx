import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddQuestion from "./addQuestion";
import QuestionsList from "./questionsList";
import QuizName from "./quizInfo";
import { IQuestion, IQuizInfoForm } from "../../interfaces";
import { Button, Col, Flex, Form, FormProps, message, Row, Space } from "antd";
import { useAppContext } from "../../utils";

const CreateQuiz: FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const [quizNameForm] = Form.useForm<IQuizInfoForm>();

  const [messageApi, contextHolder] = message.useMessage();

  const { setQuizzes, quizzes } = useAppContext();

  const navigate = useNavigate();

  const addQues = (data: IQuestion) => {
    setQuestions([data, ...questions]);
  };

  const removeQues = (index: number) => {
    const newData = questions;
    newData.splice(index, 1);

    setQuestions([...newData]);
  };

  const addQuiz: FormProps<IQuizInfoForm>["onFinish"] = ({ name, des }) => {
    if (questions.length) {
      setQuizzes([
        {
          questions,
          name,
          des,
          count: questions.length,
        },
        ...quizzes,
      ]);

      navigate("/quizzes");
    } else {
      messageApi.open({
        type: "error",
        content: "The quiz must have at least one question",
      });
    }
  };

  return (
    <>
      {contextHolder}

      <Row justify="center">
        <Col span={22}>
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <QuizName form={quizNameForm} onFinish={addQuiz} />

            <Flex gap="small" wrap>
              <Button type="primary" onClick={() => quizNameForm.submit()}>
                Create Quiz
              </Button>

              <AddQuestion add={addQues} />
            </Flex>
          </Space>
        </Col>
      </Row>

      <QuestionsList questions={questions} remove={removeQues} />
    </>
  );
};

export default CreateQuiz;
