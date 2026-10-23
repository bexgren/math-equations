import "./index.css";
import ProblemForm from "./components/ProblemForm.js";
import Scale from "./components/Scale";
import { ArrayProvider } from "./context/ArrayContext.js";
import { InputProvider } from "./context/InputContext.js";

function App() {
  return (
    <>
      <InputProvider>
        <ArrayProvider>
          <Scale />
          <ProblemForm />
        </ArrayProvider>
      </InputProvider>
    </>
  );
}

export default App;
