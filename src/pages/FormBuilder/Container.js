import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Container } from "./components/Container";
import { Box } from "./components/Box";

const FormBuilder = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <header>header</header>
        <div style={{ display: "flex" }}>
          <nav
            style={{
              width: "200px",
              height: "100vh",
              borderRight: "1px solid gray",
              padding: "20px",
            }}
          >
            <Box item={{ name: "input", type: "INPUT" }}>Input</Box>
            <Box item={{ name: "select", type: "SELECT" }}>Select</Box>
            <Box item={{ name: "radio", type: "RADIO" }}>Radio</Box>
          </nav>
          <main>
            <Container />
          </main>
        </div>
      </div>
    </DndProvider>
  );
};

export default FormBuilder;
