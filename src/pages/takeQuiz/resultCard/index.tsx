import { FC } from "react";
import { Button, Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { IQuizResult } from "../../../interfaces";

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
          <div>
            <p>Total number of questions:</p>
            <p>{result.totalCount}</p>
          </div>

          <div>
            <p>Number of correct answers:</p>
            <p>{result.correctCount}</p>
          </div>

          <div>
            <p>Number of wrong answers:</p>
            <p>{result.wrongCount}</p>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ResultCard;
