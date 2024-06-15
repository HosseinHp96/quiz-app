import { Form, FormInstance, Input } from "antd";
import { FC } from "react";
import { IQuizInfoForm } from "../../../interfaces";

interface QuizInfoProps {
  form: FormInstance;
  onFinish: (data: IQuizInfoForm) => void;
}

const QuizInfo: FC<QuizInfoProps> = ({ form, onFinish }) => {
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

      <Form.Item
        name="des"
        label="Quiz Description"
        rules={[
          {
            required: true,
            message: `Please enter the quiz description`,
          },
        ]}
      >
        <Input placeholder="Enter the quiz name" />
      </Form.Item>
    </Form>
  );
};

export default QuizInfo;
