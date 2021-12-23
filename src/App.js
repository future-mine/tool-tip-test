import Tooltip from "./components/tooltip";

function App() {
  return (
    <div className="App">
      <h1>Tool tip essential</h1>
      <Tooltip
        text={"This is tooltip For long This is tooltip For long "}
        bold={true}
        italic={true}
        left={200}
        top={200}
      >
        <button>Click me!</button>
      </Tooltip>
    </div>
  );
}

export default App;
