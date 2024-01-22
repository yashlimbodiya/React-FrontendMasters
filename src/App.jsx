import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <>
      <div>
        <h1>Adopt Me !</h1>
        <Pet name="Tommy" animal="Dog" breed="Golden Retreiver" />
        <Pet name="Lisa" animal="Cat" breed="Wild Cat" />
        <Pet name="Shera" animal="Tiger" breed="Bengal Tiger" />
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
