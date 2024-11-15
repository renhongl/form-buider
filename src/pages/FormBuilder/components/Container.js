import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { useFormBuilderContext } from "../store.js";
import { generateFormItem } from "../utils.js";

const style = {
  height: "60vh",
  width: "60vw",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  //   color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};
export const Container = () => {
  const { state } = useFormBuilderContext();
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "Container" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const renderSchema = () => {
    const keys = Object.keys(state?.schema || {});
    return keys.map((key) => {
      return state?.schema[key] ? generateFormItem(state?.schema[key]) : "Null";
    });
  };

  return (
    <div ref={drop} style={{ ...style }} data-testid="Container">
      {renderSchema()}
    </div>
  );
};
