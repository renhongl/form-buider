import FormBuilder from "./Container";
import { FormBuilderProvider } from "./store";

const Container = () => {
  return (
    <FormBuilderProvider>
      <FormBuilder />
    </FormBuilderProvider>
  );
};

export default Container;
