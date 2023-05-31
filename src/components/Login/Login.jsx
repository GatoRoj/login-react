import React, { useState } from "react";
import "./Formulario.css";

function Login({ onSubmitForm }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const correoTest = "mar@gm.cl";
  const passTest = "321";
  const handlerOnSubmit = (e) => {
    e.preventDefault();
    if (correo === correoTest && password === passTest) {
      return onSubmitForm(["Coincide", "Success"]);
    }
    return onSubmitForm(["No coincide", "Danger"]);
  };

  const handlerInputs = (e) => {
    setPassword(e.target.value);

    if (correo !== "" && password !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  console.log(correo);
  return (
    <form className="Formulario" onSubmit={handlerOnSubmit}>
      <p>Email</p>
      <input
        type="text"
        id="email"
        onChange={(e) => setCorreo(e.target.value)}
      ></input>

      <p>Password</p>
      <input
        type="password"
        id="password"
        onChange={(e) => handlerInputs(e)}
      ></input>
      <button type="submit" onSubmit={handlerOnSubmit} disabled={isDisabled}>
        Enviar
      </button>
    </form>
  );
}

export default Login;
