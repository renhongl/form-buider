import { Box } from "./components/Box";
export const generateFormItem = (item) => {
  switch (item.type) {
    case "CARD":
      return (
        <Box>
          <div
            style={{ width: "200px", height: "30px", border: "1px solid gray" }}
          >
            {item.data}
          </div>
        </Box>
      );
    case "TEXT":
      return (
        <Box>
          <div>{item.data}</div>
        </Box>
      );
    default:
      return <Box>none</Box>;
  }
};
