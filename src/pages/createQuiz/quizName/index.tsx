import { Form, FormInstance, Input } from "antd";
import { FC } from "react";
import { IQuizNameForm } from "../../../interfaces";

interface QuizNameProps {
  form: FormInstance;
  onFinish: (data: IQuizNameForm) => void;
}

const QuizName: FC<QuizNameProps> = ({ form, onFinish }) => {
  return (
    <Form
      name="quiz-name-form"
      layout="vertical"
      autoComplete="off"
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        name="name"
        label="Quiz Name"
        rules={[
          {
            required: true,
            message: `Please enter the quiz name`,
          },
        ]}
      >
        <Input placeholder="Enter the quiz name" />
      </Form.Item>
    </Form>
  );
};

export default QuizName;
