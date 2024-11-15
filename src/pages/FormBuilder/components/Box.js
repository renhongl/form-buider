import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { useFormBuilderContext } from "../store.js";
import { useCallback } from "react";
const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};
export const Box = function Box({ item, children }) {
  const { dispatch, state } = useFormBuilderContext();

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    // setCards((prevCards) =>
    //   update(prevCards, {
    //     $splice: [
    //       [dragIndex, 1],
    //       [hoverIndex, 0, prevCards[dragIndex]],
    //     ],
    //   })
    // );
    // dispatch({type: 'RESET', payload: {
    //     ...state.schema,
    //     []
    // })
  }, []);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item,
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
            name: item.name,
            data: {
              ...item,
              type: "CARD",
              data: item.name,
            },
          },
        });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    hover(hoverItem, monitor) {
      debugger;
      if (!drag.current) {
        return;
      }
      const dragIndex = hoverItem.index;
      const hoverIndex = item.index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = drag.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      debugger;
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      hoverItem.index = hoverIndex;
    },
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      {children}
    </div>
  );
};
