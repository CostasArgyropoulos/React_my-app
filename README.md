# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## REACT NOTES

- A> React does not need "clear (code) instructions" on how to run html inside js. It generates is behind the scenes
- B> React is all about components. Components are JS Functions returning JSX code
- C> React statements can only have one root element. We can have nested though
- D> Props: Data passing to component by adding an attribute
- E> Composition(children props): Compose components by using wrappers, built-in HTML elements or other attributes to build the overall UI> Offers: Extract code duplication
- F> Old REACT scripts needed to import the React package. \
An equilevant non-JSX React function would be like: \
  return React.createElement( \
    "div", \
    {}, \
    React.createElement("h2", {}, "Lets get started"), \
    React.createElement(Expenses, {items: expenses}) \
  ); \
INSTEAD OF \
  return (< div> < Expenses items={expenses} />< /div> );
- G> REACT calls every uncalled Component until there's no more component code to be executed. BUT IT NEVER REPEATS THAT.\ Resolution> State
- H> State (function named useState) is a Hook called inside a function (as almost every hook) that wants a default state value and returns the default value able to be modified and a function which we can then call to assign a new value to that variable. The corresponding component function is executed again and the variable is re-evaluated. State is separated on a per component instance basis. Use State's initial value is only evaluated in the first execution.
- I> Get user's input: onChange prop and function with 'event' parameter. event.target.value will hold the entered value
- J> When we want to transfer data between components with no clear connection between them, we utilize the closest component with direct or indirect access to these components. (app -> [expenses <---X---> newexpense]). \
Process called "Lifting the state up" (for NewExpense component) and "Passing the state via props" (for Expense component)
- K> Controlled component: Change not handled by the component it's defined, but from a parent component.


Stopped tutorial at 6.74 (to watch)