import React from "react";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 1, 28),
    },
    {
      id: "e2",
      title: "Toiler Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    { id: "e3", title: "New TV", amount: 799.99, date: new Date(2021, 2, 12) },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2020, 5, 12),
    },
  ];

  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Lets get started"),
    React.createElement(Expenses, {items: expenses})
  );

  // return (
  //   <div>
  //     <Expenses items={expenses} />
  //   </div>
  // );
}

export default App;
