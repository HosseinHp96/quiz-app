import { FC } from "react";
import { Button, Col, Row, Space, Table } from "antd";
import type { TableProps } from "antd";
import { useNavigate } from "react-router-dom";
import { IQuiz } from "../../interfaces";
import { useAppContext } from "../../utils";

const Quizzes: FC = () => {
  const { quizzes } = useAppContext();

  const navigate = useNavigate();

  const columns: TableProps<IQuiz>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "des",
      key: "des",
    },
    {
      title: "Number of questions",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Action",
      key: "action",
      render: (_text, _record, index) => (
        <Space size="middle">
          <Button
            onClick={() => navigate(`/quizzes/take-quiz/${index}`)}
            type="primary"
            ghost
          >
            Take quiz
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Row justify="center">
      <Col span={22}>
        <Table
          pagination={{
            position: ["bottomCenter"],
            pageSize: 2,
          }}
          columns={columns}
          dataSource={quizzes}
        />
      </Col>
    </Row>
  );
};

export default Quizzes;
