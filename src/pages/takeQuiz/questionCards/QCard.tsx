import { FC, useState } from "react";
import { Card, Form, Radio, RadioChangeEvent, Space } from "antd";
import { IQuestion } from "../../../interfaces";

interface QCardProps {
  data: IQuestion;
  index: number;
}

const QCard: FC<QCardProps> = ({ data, index }) => {
  const [value, setValue] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const onChange = (e: RadioChangeEvent) => {
    setDisabled(true);
    setValue(e.target.value.selectedAnswer);
  };

  return (
    <Card title={data.des} style={{ width: 500 }}>
      <Form.Item name={index} rules={[{ required: true }]}>
        <Radio.Group onChange={onChange} disabled={disabled}>
          <Space direction="vertical">
            {data.answers.map((item, i) => (
              <Radio
                value={{
                  selectedAnswer: i,
                  correctAnswer: data.correct,
                }}
                key={i}
              >
                {i + 1}: {item}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>

      {disabled && (
        <div>{value === data.correct ? "correct answer" : "wrong answer"}</div>
      )}
    </Card>
  );
};

export default QCard;
