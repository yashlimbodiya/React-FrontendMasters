import React from "react";
import ReactDOM from "react-dom";
import SearchParam from "./SearchParams";

const App = () => {
  return (
    <>
      <div>
        <h1>Adopt Me !!</h1>
        <SearchParam />
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
