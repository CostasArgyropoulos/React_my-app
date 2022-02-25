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
- K> Controlled component: Change not handled by the component it's defined, but from a parent component. Specifically, the internal state is controlled by React.
- L> {props.children} used at the target function will give us the content passed from the parent function closing tags
- M> If we want to avoid return <div>'s with nested functionalities, an elegant workaround is to create a helper component (wrapper) which will just return props.children and that way everything nested inside that jsx return statement will be returned as if it was a div. Alternativelly, we could use <React.Fragment> as a wrapper which is an equilevant wrapper.
- N> Refs(useRef hook): They allow us to get access to other DOM elements and work with them. They can basically replace useState in cases where we just need to read a value and don't need to change anything.
- O> Accessing values by ref => Uncontrolled component. Their internal state (the value reflected in them) is not controlled by React.
- P> Side Effects: Anything outside basic React functionalities(render ui, hooks,props, etc), like storing data in Browser, send http requests to backend servers, set and manage timers. Works by useEffect hool, whose fuction is executed after every component evaluation if the specified dependencies have changed. Added dependencies are what we use in the side effect function.
- Q> useReducer: Hook used as a replacement of useState, in cases where there are multiple states or dependencies to other states(related data). It provides a more powerfull state management. Form: const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn); useState is the main state management tool.
 - R> useContext: When passing many data via props and especially when we pass them through components just to forward them to the next level(compoent). To utilize useContext, you first need to create one and provide it from a point where is your root to context navigation. Not optimal for high frequency changes. There's Redux for that.
 - O> With useImperativeHandle and React.forwardRef you can expose functionalities from a React component to its parent component, and use the component in the parent component through Refs and trigger certain functionalities.

- Back ticks (``) to inject dynamically added classes: <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
- Styled Components: Pachages that help you build components with styles attached just to these components
- You can import styled from 'styled-components'; const Button = styled.button`` <- ``: anything inside will end up in the button method

Stopped tutorial at 9.132 (to watch)