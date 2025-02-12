import { FC } from "react";
import { Col, Form, Row, Space } from "antd";
import { IQuestion } from "../../../interfaces";
import { hasUndefinedValue } from "../../../utils";
import QCard from "./QCard";
interface QuestionCardsProps {
  questions: IQuestion[];
  finishQuiz: (data: Record<string, null>) => void;
}

const QuestionCards: FC<QuestionCardsProps> = ({ questions, finishQuiz }) => {
  const [form] = Form.useForm();

  const check = (data: Record<string, null>) => {
    console.log(data);

    const status = hasUndefinedValue(data);
    if (!status) {
      finishQuiz(data);
    }
  };

  return (
    <section>
      <Row justify="center">
        <Col span={22}>
          <Form
            form={form}
            layout="horizontal"
            onValuesChange={(_, allFields) => check(allFields)}
          >
            {questions.map((ques, i) => (
              <QCard data={ques} key={i} index={i} />
            ))}
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default QuestionCards;
