import { createContext, useReducer, useContext } from "react";

const reducer = (state = { schema: {} }, action) => {
  console.log("---action", action);

  switch (action.type) {
    case "ADD":
      return {
        ...state,
        schema: {
          ...state.schema,
          [action.payload.name]: action.payload.data,
        },
      };
    case "RESET": {
      return {
        ...state,
        schema: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export const FormBuilderContext = createContext({ schema: {} });

export const FormBuilderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer);
  console.log("------state", state);

  return (
    <FormBuilderContext.Provider value={{ state, dispatch }}>
      {children}
    </FormBuilderContext.Provider>
  );
};

export function useFormBuilderContext() {
  return useContext(FormBuilderContext);
}
