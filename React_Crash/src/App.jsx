// We can create multiple components in a single file but we need to export only one component as default and the rest as named exports
// Components help us to break down the UI into smaller, reusable pieces which we can use anywhere. They can be functional or class-based, but functional components are more common in modern React development due to their simplicity and the introduction of hooks.
// JSX only accepts one parent element, so we can use a fragment (<>...</>) to wrap multiple elements without adding an extra node to the DOM.
// JSX only accepts expressions (things that return a value), not statements (like if, for, etc.). To include JavaScript logic in JSX, we can use the ternary operator or logical operators.
// You can use statements outside return to prepare data or perform calculations before rendering. For example, you can use an if statement to determine what to render based on certain conditions, and then return the appropriate JSX.

// we use curly braces to "destructure" the props object and get the title prop directly. 
// Without it, we pass (props) and access the title prop using props.title inside the component.
const Card = ({ title, isCool, actors }) => {
  return (
    <div style={{
      border: "1px solid #4b5362",
      padding: "20px",
      margin: "10px",
      backgroundColor: isCool ? "#08a45e" : "#f8d7da",
      borderRadius: "10px",
      minHeight: "100px",
    }}>
      <h2>Show Name: {title}</h2>
      <p>Cool: {isCool ? "I love it!" : "Not my cup of tea."}</p>
      <p>Actors: {actors.join(", ")}</p>
      {/* We use curly braces to embed JavaScript expressions within JSX */}
    </div>
  )
};

const App = () => {
  return (
    <div className="card-container">
      
      {/* we pass props to the component */}
      <Card title="Avengers: Endgame" isCool={true} actors={["Robert Downey Jr.", "Chris Evans"]} />
      <Card title="Succession" isCool={true} actors={["Jeremy Strong", "Sarah Snook"]} />
      <Card title="Eternal Sunshine of the Spotless Mind" isCool={true} actors={["Jim Carrey", "Kate Winslet"]} />
    </div>
  )

};

export default App;
// to export multiple components to use them in other files, we can use named exports
export { Card };