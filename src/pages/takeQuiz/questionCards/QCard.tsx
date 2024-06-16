import { FC, useState } from "react";
import { Card, Form, Radio, RadioChangeEvent, Space, Typography } from "antd";
import { IQuestion } from "../../../interfaces";

const { Text } = Typography;

interface QCardProps {
  data: IQuestion;
  index: number;
}

const QCard: FC<QCardProps> = ({ data, index }) => {
  const [value, setValue] = useState();
  const [disabled, setDisabled] = useState(false);

  const onChange = (e: RadioChangeEvent) => {
    setDisabled(true);
    setValue(e.target.value);
  };

  return (
    <Card title={data.des} style={{ margin: "1.5rem 0" }}>
      <Form.Item name={index} rules={[{ required: true }]}>
        <Radio.Group onChange={onChange} disabled={disabled}>
          <Space direction="vertical">
            {data.answers.map((item, i) => (
              <Radio value={i} key={i}>
                <b>{i + 1}:</b> {item}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>

      {disabled && (
        <div>
          {value === data.correct ? (
            <Text type="success">The answer is correct.</Text>
          ) : (
            <Space direction="vertical">
              <Text type="danger">The answer is wrong.</Text>

              <Text type="success">Correct answer: {data.correct}</Text>
            </Space>
          )}
        </div>
      )}
    </Card>
  );
};

export default QCard;
