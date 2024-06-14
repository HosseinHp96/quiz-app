import { FC, useState, useEffect } from "react";
import { Space } from "antd";
import AddQuestion from "./addQuestion";
import { IQuestion } from "../../interfaces";

const CreateQuiz: FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const addQues = (data: IQuestion) => {
    setQuestions([data, ...questions]);
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <section>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <AddQuestion add={addQues} />
      </Space>
    </section>
  );
};

export default CreateQuiz;
