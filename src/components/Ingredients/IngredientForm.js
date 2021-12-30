import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const inputState = useState({ title: "", amount: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState[0].title}
              onChange={(event) => {
                const newTitle = event.target.value;
                inputState[1](prevInputState => ({
                  title: newTitle,
                  amount: prevInputState[0].amount
                }))}
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={inputState[0].amount} />
          </div>
          <div className="ingredient-form__actions">
            <button
              type="submit"
              onChange={(event) => {
                const newAmount = event.target.value;
                inputState[1](prevInputState => ({
                  amount: newAmount,
                  title: inputState[0].title,
                }))}
              }
            >
              Add Ingredient
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
