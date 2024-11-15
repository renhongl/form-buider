import Card from "./components/Card";
import { Input, Select, Form } from "@arco-design/web-react";
const FormItem = Form.Item;

const wrapFormItem = (item, index, moveCard, children) => {
  return (
    <Card key={item.id} id={item.id} index={index} moveCard={moveCard}>
      <FormItem label={item.label}>{children}</FormItem>
    </Card>
  );
};

export const generateFormItem = (item, index, moveCard) => {
  console.log(item);

  switch (item.type) {
    case "CARD":
      return (
        <Card
          key={item.id}
          index={index}
          id={item.id}
          text={item.text}
          moveCard={moveCard}
        />
      );
    case "input":
      return wrapFormItem(item, index, moveCard, <Input />);
    case "select":
      return wrapFormItem(
        item,
        index,
        moveCard,
        <Select options={["1", "2"]} />
      );
    default:
      return <Card>none</Card>;
  }
};
