import React from "react";
import { useState } from "react";

// React Fiber: It's the internal engine of React, its reconciliation algorithm.
// Think of it as a behind-the-scenes manager that makes rendering your app more efficient.
// It can pause, abort, or prioritize work, which makes complex UIs feel smooth and responsive.
// You don't write Fiber code directly, but it's what makes features like hooks and concurrent rendering possible.

// Component: A component is a reusable, self-contained piece of UI.
// In React, we build our user interface by composing these components together.
// `App` here is a "functional component," which is the modern way to write React components using plain JavaScript functions.
const App = () => {
  // This is how we would have done it in Vanilla JavaScript, but React provides a more declarative way.
  // const btn = document.getElementById("btn");
  // console.log(btn);
  // btn.addEventListener("click", () => {
  //   alert("btn clicked");
  // });
  // function greet() {
  //   alert("hii");
  // }

  // useState Hook: This is a hook that lets you add React state to functional components.
  // - `useState(0)` initializes our state variable with a value of 0.
  // - It returns an array with two elements:
  //   1. `count`: The current state variable. This is the value you read from.
  //   2. `setCount`: A function to update the state. When you call this, React re-renders the component with the new state value.
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function increment() {
    // We call the `setCount` function to update the state.
    // React batches state updates for performance.
    setCount(count + 1);
    // IMPORTANT: This console.log will show the *old* value of `count`, not the new one.
    // State updates are asynchronous. The component will re-render with the new value,
    // but the `count` variable in this function's scope is from the *current* render.
    console.log(count);
  }

  // This function handles the input change event for two-way binding.
  function handleInputChange(event) {
    setText(event.target.value);
  }

  return (
    // JSX: This looks like HTML, but it's actually JavaScript syntax extension.
    // It allows us to write our UI structure declaratively within our JavaScript code.
    <div>
      {/* We display the current value of our state variable `count` here. */}
      <p>value of a is :{count}</p>
      {/*
        Event Handling in React:
        - We attach event handlers like `onClick` directly to the JSX elements.
        - Notice `onClick` is camelCased, unlike HTML's `onclick`.
        - We pass the function `increment` itself, not a string or a call to the function.
        - React uses "Synthetic Events," which are wrappers around the browser's native events.
        - This ensures events work consistently across different browsers.
      */}
      <button onClick={increment}>click</button>

      <hr />

      {/*
        Two-Way Binding:
        React doesn't have a built-in "two-way binding" feature like some other frameworks (e.g., ng-model in Angular).
        Instead, we implement it manually by combining state with event handlers. This makes the data flow explicit and easier to understand.

        The process is:
        1. `value={text}`: The input's displayed value is bound to our `text` state variable. The state dictates what the input shows. (State -> View)
        2. `onChange={handleInputChange}`: When the user types in the input, the `onChange` event fires.
        3. `setText(event.target.value)`: Inside the handler, we update the `text` state with the new value from the input. (View -> State)
        
        This cycle (State -> View -> State) creates "two-way binding". The UI is always in sync with the component's state.
      */}
      <h2>Two-Way Binding Example</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleInputChange}
      />
      <p>Current input value: {text}</p>
    </div>
  );
};

// Component vs. Screen vs. Layout
//
// While everything in React is a component, we often categorize them based on their role and scope.
//
// 1. Component:
//    - The fundamental building block.
//    - It's usually small and focused on a single responsibility (e.g., a button, an input field, a user avatar).
//    - Designed to be highly reusable across the entire application.
//    - Examples: The `<button>` or `<input>` in this file.
//
// 2. Screen (or Page):
//    - A component that represents a full page or a distinct view in the application.
//    - It composes multiple smaller components to build a complete user interface for a specific route (e.g., /home, /profile, /settings).
//    - It often fetches and manages the data required for that specific view.
//    - Example: A `HomePage` component that includes a navbar, a list of posts, and a sidebar.
//
// 3. Layout:
//    - A component that defines the common structure shared by multiple screens/pages.
//    - It typically includes elements that are consistent across the app, like a Header, Footer, or main navigation (Sidebar).
//    - Screens are often rendered as "children" within a Layout component. This avoids duplicating the same structure on every single screen.
//    - Example: A `MainLayout` component that has a persistent header and footer, and it renders different `Screen` components in the middle depending on the URL.

export default App;
