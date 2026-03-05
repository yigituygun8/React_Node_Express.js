React is a JavaScript library for building user interfaces. It was developed by Facebook and is widely used for creating web applications. React allows developers to create reusable UI components, manage the state of their applications efficiently, and build complex user interfaces with ease.

Key features of React include:
1. **Component-Based Architecture**: React encourages developers to build applications using reusable components. Each component can manage its own state and can be composed together to create complex UIs.
2. **JSX Syntax**: React uses JSX, a syntax extension that allows developers to write HTML-like code within JavaScript. This makes it easier to create and visualize the structure of the UI components.
3. **Unidirectional Data Flow**: React follows a unidirectional data flow, meaning that data flows in one direction from parent components to child components. This makes it easier to understand and debug the application.
4. **Virtual DOM**: React uses a virtual DOM to optimize rendering performance. When the state of a component changes, React updates the virtual DOM and then efficiently updates the actual DOM to reflect those changes. In React 19, the virtual DOM has been further optimized to improve performance and reduce memory usage.

What is JSX?
- JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. JSX makes it easier to create and visualize the structure of the UI components. When using JSX, you can write code that looks like HTML, but it is actually JavaScript under the hood. For example:

```jsx
const element = <h1>Hello, world!</h1>;
```

Components: Reusable piece of code that can be used to build elements on the page.
    - Functional Components: These are simple JavaScript functions that return JSX. They are stateless and do not have lifecycle methods.
    - Class Components: These are ES6 classes that extend the React.Component class. They can have state and lifecycle methods, making them more powerful than functional components.

    - Class components have been largely replaced by functional components with the introduction of React Hooks, which allow functional components to manage state and side effects without needing to convert them into class components.

    
State: Represents the data that a component manages internally. Changing the state of a component will trigger a re-render, allowing the UI to update based on the new state. Could be a form input data, fetched data, UI-related data like whether a dropdown is open or closed, etc. There is also global state, which is shared across multiple components and can be managed using libraries like Redux or Context API.

Props: Short for "properties," props are read-only data that are passed from a parent component to a child component. They allow components to communicate with each other and share data. Props are immutable, meaning that a child component cannot modify the props it receives from its parent.

Hooks: Allows us to use state and other React features within functional components. Some common hooks include:
    - useState: Allows you to add state to a functional component.
    - useEffect: Allows you to perform side effects in a functional component, such as fetching data or subscribing to events.
    - useRef: Allows you to create a mutable reference that persists across renders, which can be used to access DOM elements or store mutable values.
    - useReducer: Allows you to manage complex state logic in a functional component by using a reducer function, similar to how Redux works.   
    - useContext: Allows you to access the context value in a functional component. (deprecated and replaced with use in React 19)

What is context?
Context is a way to pass data through the component tree without having to pass props down manually at every level. It allows you to share values like themes, user information, or any other data that needs to be accessible by multiple components in the application. Context is created using the `React.createContext()` function and can be consumed using the `useContext` hook in functional components or the `Context.Consumer` component in class components. In React 19, the use of context has been simplified with the introduction of the `use` hook, which allows you to access context values directly within functional components without needing to wrap them in a consumer component.

SPA, SSR, SSG:
- SPA (Single Page Application): A web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. SPAs rely heavily on JavaScript to manage the user interface and provide a seamless user experience without full page reloads. JS loads the entire UI including routes. Not SEO friendly.
- SSR (Server-Side Rendering): A technique where the server generates the HTML for a web page on the server and sends it to the client. This allows for faster initial page loads and better SEO, as search engines can easily crawl the content. In React, SSR can be implemented using frameworks like Next.js or Remix.
- SSG (Static Site Generation): A method of generating static HTML pages at build time. This approach allows for fast page loads and improved SEO, as the content is pre-rendered and can be easily crawled by search engines. In React, SSG can also be implemented using frameworks like Next.js or Gatsby.

Build Tools:
- Webpack: A popular module bundler that takes your JavaScript files and their dependencies and bundles them into a single file (or multiple files) that can be included in your HTML. Webpack also supports features like code splitting, hot module replacement, and tree shaking to optimize the performance of your application.
- Vite: A modern build tool built on top of ESBuild that provides a faster and more efficient development experience compared to traditional bundlers like Webpack. Vite uses native ES modules in the browser during development, which allows for faster hot module replacement and improved performance. It also supports features like code splitting and tree shaking for optimized production builds.

