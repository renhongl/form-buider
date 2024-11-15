import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import ItemTypes from "../ItemTypes";
import { useFormBuilderContext } from "../store";
const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};
const FormItem = ({ text, item }) => {
  const { dispatch, state } = useFormBuilderContext();

  const [{ isDragging }, drag] = useDrag({
    item,
    type: ItemTypes.FORMITEM,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(
          `You dropped ${item.name} into ${
            dropResult.name
          }, data: ${JSON.stringify(item)}`
        );
        dispatch({
          type: "ADD",
          payload: {
            id: Math.random(),
            ...item,
          },
        });
      }
    },
  });
  return (
    <div ref={drag} style={{ ...style }}>
      {text}
    </div>
  );
};
export default FormItem;
