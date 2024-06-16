import React from "react";
import { Col, List, Row } from "antd";
import { IQuestion } from "../../../interfaces";
import ListItem from "./item";

interface QuestionsListProps {
  questions: IQuestion[];
  remove: (index: number) => void;
}

const QuestionsList: React.FC<QuestionsListProps> = ({ questions, remove }) => (
  <Row justify="center">
    <Col span={22}>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          align: "center",
          pageSize: 6,
        }}
        dataSource={questions}
        renderItem={(item, index) => (
          <ListItem item={item} index={index} remove={remove} />
        )}
      />
    </Col>
  </Row>
);

export default QuestionsList;
