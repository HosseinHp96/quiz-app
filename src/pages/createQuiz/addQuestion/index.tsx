import { FC, useState } from "react";
import { Button, Col, Row, Form } from "antd";
import AddModal from "./modal";

const AddQuestion: FC = () => {
  const [open, setOpen] = useState(false);

  const showUserModal = () => {
    setOpen(true);
  };

  const hideUserModal = () => {
    setOpen(false);
  };

  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        console.log(name);
        console.log(values);
        console.log(forms);
      }}
    >
      <Row justify="center">
        <Col span={22}>
          <Button type="primary" onClick={showUserModal}>
            Add Question
          </Button>

          <AddModal open={open} onCancel={hideUserModal} />
        </Col>
      </Row>
    </Form.Provider>
  );
};

export default AddQuestion;
