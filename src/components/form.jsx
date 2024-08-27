import React from "react";

const Form = ({ weatherMethod }) => (
  <div className="form">
    <form onSubmit={weatherMethod}>
      <input className="input" type="text" name="city" placeholder="Город" />
      <button className="button" type="submit">Получить погоду</button>
    </form>
  </div>
);

export default Form;
