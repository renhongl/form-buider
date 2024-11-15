import React, { useState, useCallback } from "react";
import Card from "./Card";
import { useFormBuilderContext } from "../store";
import ItemTypes from "../ItemTypes";
import { useDrag, useDrop } from "react-dnd";
import { generateFormItem } from "../utils";
import { Form } from "@arco-design/web-react";
const style = {
  width: "60vw",
  height: "60vh",
  border: "1px solid gray",
  padding: 20,
};
const FormContainer = () => {
  const { dispatch, state } = useFormBuilderContext();
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.CARD, ItemTypes.FORMITEM],
    drop: () => ({ name: "Container" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = state[dragIndex];
      const hoverCard = state[hoverIndex];
      let newState = [...state];
      newState[dragIndex] = hoverCard;
      newState[hoverIndex] = dragCard;
      dispatch({ type: "RESET", payload: newState });
    },
    [state]
  );

  return (
    <div ref={drop} style={style}>
      <Form>{state.map((card, i) => generateFormItem(card, i, moveCard))}</Form>
    </div>
  );
};
export default FormContainer;
