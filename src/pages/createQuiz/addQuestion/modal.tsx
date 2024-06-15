import { FC } from "react";
import { Modal, Button, FormInstance } from "antd";
import AddFrom from "./form";
interface AddModalProps {
  form: FormInstance;
  open: boolean;
  onCancel: () => void;
}

const AddModal: FC<AddModalProps> = ({ form, open, onCancel }) => {
  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      open={open}
      title="Add a new question"
      okText="Create"
      cancelText="Cancel"
      okButtonProps={{ autoFocus: true }}
      onCancel={onCancel}
      onOk={onOk}
      destroyOnClose
      footer={[
        <Button key="reset" onClick={() => form.resetFields()}>
          Reset Form
        </Button>,
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onOk}>
          Add
        </Button>,
      ]}
    >
      <AddFrom form={form} />
    </Modal>
  );
};

export default AddModal;
