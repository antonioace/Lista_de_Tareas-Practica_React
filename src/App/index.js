//import './App.css';
import "../index.css";


import AppUI from "./AppUI";
import { TodoProvider } from "../TodoContext";

function App(props) {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
