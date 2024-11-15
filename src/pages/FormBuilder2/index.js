import FormBuilder from "./FormBuilder";
import { FormBuilderProvider } from "./store";

const Container = () => {
  return (
    <FormBuilderProvider>
      <FormBuilder />
    </FormBuilderProvider>
  );
};

export default Container;
