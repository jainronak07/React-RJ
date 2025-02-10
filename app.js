const heading = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child 1" },
    React.createElement(
      "h1",
      { id: "child" },
      "Hello world form React child 1!!!"
    ),
    React.createElement(
      "h2",
      { id: "child" },
      "Hello world form React Child 2!!!"
    )
  ),
  React.createElement(
    "div",
    { id: "child 2" },
    React.createElement(
      "h1",
      { id: "child" },
      "Hello world form React child 1!!!"
    ),
    React.createElement(
      "h2",
      { id: "child" },
      "Hello world form React Child 2!!!"
    )
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
