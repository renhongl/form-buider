import { createContext, useReducer, useContext } from "react";

const reducer = (state = [], action) => {
  console.log("---action", action);

  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "RESET": {
      return action.payload;
    }
    default:
      return {
        ...state,
      };
  }
};

export const FormBuilderContext = createContext([]);

export const FormBuilderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  console.log("------state", state);

  return (
    <FormBuilderContext.Provider value={{ state: state || [], dispatch }}>
      {children}
    </FormBuilderContext.Provider>
  );
};

export function useFormBuilderContext() {
  return useContext(FormBuilderContext);
}
