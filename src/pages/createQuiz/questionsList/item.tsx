import { Button, List } from "antd";
import { FC } from "react";
import { IQuestion } from "../../../interfaces";

interface ListItemProps {
  index: number;
  item: IQuestion;
  remove: (index: number) => void;
}

const ListItem: FC<ListItemProps> = ({ index, item, remove }) => {
  return (
    <List.Item
      key={index}
      actions={[
        <Button onClick={() => remove(index)} danger>
          delete
        </Button>,
      ]}
    >
      <div>
        <h3>Question {index + 1}</h3>

        <p>{item.des}</p>

        <h5>Correct Answer: {item.correct}</h5>

        <ol>
          {item.answers.map((ans, i) => (
            <li key={i}>{ans}</li>
          ))}
        </ol>
      </div>
    </List.Item>
  );
};

export default ListItem;
