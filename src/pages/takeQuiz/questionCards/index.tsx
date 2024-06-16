import { FC } from "react";
import { Col, Form, Row, Space } from "antd";
import { IQuestion } from "../../../interfaces";
import { hasUndefinedValue } from "../../../utils";
import QCard from "./QCard";

interface QuestionCardsProps {
  questions: IQuestion[];
  finishQuiz: (data: object) => void;
}

const QuestionCards: FC<QuestionCardsProps> = ({ questions, finishQuiz }) => {
  const [form] = Form.useForm();

  const check = (data: Record<string, unknown>) => {
    const status = hasUndefinedValue(data);
    if (!status) {
      finishQuiz(data);
    }
  };

  return (
    <section style={{ backgroundColor: "lightgray" }}>
      <Row justify="center">
        <Col span={22}>
          <Form
            form={form}
            layout="horizontal"
            onValuesChange={(_, allFields) => check(allFields)}
          >
            <Space direction="vertical" size={16}>
              {questions.map((ques, i) => (
                <QCard data={ques} key={i} index={i} />
              ))}
            </Space>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default QuestionCards;
