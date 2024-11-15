import FormItem from "./FormItem";

const formItemList = [
  {
    text: "Input",
    item: {
      type: "input",
      label: "test",
    },
  },
  {
    text: "Select",
    item: {
      type: "select",
      label: "test bb",
    },
  },
];

const FormItems = () => {
  return formItemList.map((formItem) => {
    return <FormItem text={formItem.text} item={formItem.item} />;
  });
};

export default FormItems;
