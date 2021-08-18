import Button from "./components/Button";
import Box from "./components/Box";
import ColorProvider from "./components/ColorProvider";

function App() {
  return (
    <ColorProvider>
      <Box/>
      <Button/>
    </ColorProvider>
  );
}

export default App;
