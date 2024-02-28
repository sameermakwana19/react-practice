import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpressionSlots from "./Components/module1/ExpressionSlots";
import Exercise7 from "./Components/module1/Exercise7";
import Exercise7_1 from "./Components/module1/Exercise7_1";
import FriendlyGreeting from "./Components/module1/FriendlyGreeting";
import ContactCard from "./Components/module1/ContactCard";
import Button from "./Components/module1/Button";
import Mapping from "./Components/module1/Mapping";
import Keys from "./Components/module1/Keys";
import ShoppingCart from "./Components/module1/ShoppingCart";
import ConditionalRendering from "./Components/module1/ConditionalRendering";
import Grid from "./Components/module1/Grid";
import ClickEvent from "./Components/module2/ClickEvent";
import AsychStateBeh from "./Components/module2/AsychStateBeh";
import Counter1 from "./Components/module2/Counter1";
import Counter2 from "./Components/module2/Counter2";
import StateVsVar from "./Components/module2/StateVsVar";
import Form1 from "./Components/module2/Form1";
import Form2 from "./Components/module2/Form2";
import FormControls from "./Components/module2/FormControls";
import Countries from "./Components/module2/Countries";
import CodeExercise from "./Components/module2/CodeExercise";
import PropsVSState from "./Components/module2/PropsVSState";
import ColorPicker from "./Components/module2/ColorPicker";
import DynamicKeyGeneration from "./Components/module2/DynamicKeyGeneration";
import LiftingState from "./Components/module2/LiftingState";
import BigApp from "./Components/module2/BigCoin/BigApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*  
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  */}
      {/* <h1>hello</h1> */}

      {/* <ExpressionSlots /> */}

      {/* <Exercise7 /> */}

      {/* <Exercise7_1  */}

      {/* <FriendlyGreeting name="sameer" /> */}
      {/* <FriendlyGreeting name="chirag" /> */}

      {/* <ContactCard name="sam" job="eng" email="abc.com" />
      <ContactCard name="john" job="sr.eng" email="pqr.com" />
      <ContactCard name="ram" job="jr.eng" email="xyz.com" /> */}

      {/* <Button status="cancel">Cancel</Button>
      <Button status="confirm">Submit</Button>
      <Button>Normal</Button> */}

      {/* <Mapping /> */}

      {/* <Keys /> */}
      {/* <ShoppingCart /> */}

      {/* <ConditionalRendering /> */}

      {/* Grid Component */}
      {/* <Grid rows={5} cols={7} />
      <hr />
      <Grid rows={4} />
      <hr />
      <Grid /> */}

      {/* <ClickEvent /> */}

      {/* <AsychStateBeh /> */}
      {/* <Counter1 /> */}

      {/* <Counter2 /> */}

      {/* <StateVsVar /> */}
      {/* <Form1 /> */}
      {/* <Form2 /> */}

      {/* <FormControls /> */}
      {/* <Countries /> */}
      {/* <CodeExercise /> */}
      {/* <PropsVSState /> */}

      {/* <ColorPicker /> */}

      {/* <DynamicKeyGeneration /> */}

      {/* <LiftingState /> */}
      <BigApp />
    </>
  );
}

export default App;
