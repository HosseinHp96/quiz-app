import { FC } from "react";
import { Modal, Form, Button } from "antd";
import AddFrom from "./form";

interface AddModalProps {
  open: boolean;
  onCancel: () => void;
}

const AddModal: FC<AddModalProps> = ({ open, onCancel }) => {
  const [form] = Form.useForm();

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      open={open}
      title="Create a new question"
      okText="Create"
      cancelText="Cancel"
      okButtonProps={{ autoFocus: true }}
      onCancel={onCancel}
      onOk={onOk}
      destroyOnClose
      footer={[
        <Button onClick={() => form.resetFields()}>Reset Form</Button>,
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onOk}>
          Create
        </Button>,
      ]}
    >
      <AddFrom form={form} />
    </Modal>
  );
};

export default AddModal;
