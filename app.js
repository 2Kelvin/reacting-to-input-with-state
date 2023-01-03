function Form(_ref) {
  var _ref$status = _ref.status,
      status = _ref$status === undefined ? "success" : _ref$status;

  if (status === "success") {
    return React.createElement(
      "h1",
      { className: "form_success" },
      "That's right\u2705"
    );
  }

  return React.createElement(
    "div",
    { className: "form" },
    React.createElement(
      "h2",
      null,
      "City Quiz"
    ),
    React.createElement(
      "p",
      null,
      "In which city is there a billboard that turns air into drinkable water?"
    ),
    React.createElement(
      "form",
      null,
      React.createElement("textarea", { disabled: status === "submitting" }),
      React.createElement("br", null),
      React.createElement(
        "button",
        { disabled: status === "empty" || status === "submitting" },
        "Submit"
      ),
      status === "error" && React.createElement(
        "p",
        { className: "error" },
        "Good guess but wrong answer. Try again!"
      )
    )
  );
}

export default function App() {
  return React.createElement(Form, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));