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
- Old REACT scripts needed to import the React package. \
An equilevant non-JSX React function would be like: \
  return React.createElement( \
    "div", \
    {}, \
    React.createElement("h2", {}, "Lets get started"), \
    React.createElement(Expenses, {items: expenses}) \
  ); \
INSTEAD OF \
  return (
    < div>
      < Expenses items={expenses} />
    < /div>
  );