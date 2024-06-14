import { FC } from "react";
import { Space } from "antd";
import AddQuestion from "./addQuestion";

const CreateQuiz: FC = () => {
  return (
    <section>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <AddQuestion />
      </Space>
    </section>
  );
};

export default CreateQuiz;
