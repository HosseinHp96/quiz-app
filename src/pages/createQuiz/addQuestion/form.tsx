import { FC } from "react";
import { Form, FormInstance, Input, Select } from "antd";

const options = [
  { value: 1, label: "one" },
  { value: 2, label: "tow" },
  { value: 3, label: "three" },
  { value: 4, label: "four" },
];

const formInputItems = [
  { label: "description", name: "des" },
  { label: "answer one", name: "ans1" },
  { label: "answer tow", name: "ans2" },
  { label: "answer three", name: "ans3" },
  { label: "answer four", name: "ans4" },
];

interface AddFromProps {
  form: FormInstance;
}

const AddFrom: FC<AddFromProps> = ({ form }) => {
  return (
    <Form
      name="add-question-form"
      layout="vertical"
      autoComplete="off"
      form={form}
    >
      {formInputItems.map((item, key) => (
        <Form.Item
          key={key}
          name={item.name}
          label={item.label}
          rules={[
            {
              required: true,
              message: `Please input the ${item}!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
      ))}

      <Form.Item
        name="correct"
        label="Correct answer"
        rules={[
          {
            required: true,
            message: `Please select the Correct answer`,
          },
        ]}
      >
        <Select options={options} />
      </Form.Item>
    </Form>
  );
};

export default AddFrom;
