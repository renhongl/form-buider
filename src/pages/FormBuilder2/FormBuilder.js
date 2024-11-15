import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import FormContainer from "./components/FormContainer";
import FormItems from "./components/FormItems";

const FormBuilder = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <header>header</header>
        <div style={{ display: "flex", gap: 8 }}>
          <nav
            style={{
              width: "200px",
              height: "100vh",
              borderRight: "1px solid gray",
              padding: "20px",
            }}
          >
            <FormItems />
          </nav>
          <main>
            <FormContainer />
          </main>
        </div>
      </div>
    </DndProvider>
  );
};

export default FormBuilder;
