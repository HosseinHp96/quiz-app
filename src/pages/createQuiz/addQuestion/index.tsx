import { FC, useState } from "react";
import { Button, Form } from "antd";
import AddModal from "./modal";
import { IAddQuestionForm, IQuestion } from "../../../interfaces";
interface AddQuestionProps {
  add: (data: IQuestion) => void;
}

const AddQuestion: FC<AddQuestionProps> = ({ add }) => {
  const [open, setOpen] = useState(false);

  const [form] = Form.useForm<IAddQuestionForm>();

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const finish = (data: IAddQuestionForm) => {
    add({
      des: data.des,
      correct: data.correct,
      answers: [data.ans1, data.ans2, data.ans3, data.ans4],
    });
    hideModal();
    form.resetFields();
  };

  return (
    <section>
      <Form.Provider
        onFormFinish={(_name, { values }) => finish(values as IAddQuestionForm)}
      >
        <Button onClick={showModal}>Add Question</Button>

        <AddModal form={form} open={open} onCancel={hideModal} />
      </Form.Provider>
    </section>
  );
};

export default AddQuestion;
