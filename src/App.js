import "./App.css";
import Login from "./components/Login/Login";
import Alert from "./components/Alert/Alert";
import { useState } from "react";

export default function App() {
  const [isValid, setIsValid] = useState("");
  const handlerSubmitResult = (e) => {
    console.log(e);
    setIsValid(e);
    console.log(isValid);
  };
  return (
    <div className="App">
      <div class="Card">
        <Login onSubmitForm={(e) => handlerSubmitResult(e)} />
        <Alert text={isValid[0]} variant={isValid[1]} />
      </div>
    </div>
  );
}
