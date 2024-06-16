import { FC } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { IQuizResult } from "../../../interfaces";

const { Title } = Typography;
interface ResultCardProps {
  result: IQuizResult;
  TakeQuizAgain: () => void;
}

const ResultCard: FC<ResultCardProps> = ({ result, TakeQuizAgain }) => {
  const navigate = useNavigate();

  return (
    <Row justify="center">
      <Col span={22}>
        <Card
          actions={[
            <Button
              onClick={() => navigate("/quizzes")}
              type="primary"
              style={{ width: "70%" }}
            >
              Go to Quizzez page
            </Button>,
            <Button
              onClick={TakeQuizAgain}
              type="primary"
              style={{ width: "70%" }}
            >
              Try Again
            </Button>,
          ]}
        >
          <Title level={4}>
            Total number of questions: {result.totalCount}
          </Title>

          <Title type="success" level={4}>
            Number of correct answers: {result.correctCount}
          </Title>

          <Title type="danger" level={4}>
            Number of wrong answers: {result.wrongCount}
          </Title>
        </Card>
      </Col>
    </Row>
  );
};

export default ResultCard;
