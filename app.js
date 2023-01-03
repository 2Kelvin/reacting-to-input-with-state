import _regeneratorRuntime from "babel-runtime/regenerator";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function Form() {
  var handleSubmit = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setStatus("submitting");
              _context.prev = 2;
              _context.next = 5;
              return submitForm(answer);

            case 5:
              setStatus("success");
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);

              setStatus("typing");
              setError(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 8]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      answer = _React$useState2[0],
      setAnswer = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = React.useState("typing"),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      status = _React$useState6[0],
      setStatus = _React$useState6[1];

  if (status === "success") {
    return React.createElement(
      "h1",
      { className: "form_success" },
      "That's right\u2705"
    );
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
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
      { onSubmit: handleSubmit },
      React.createElement("textarea", {
        value: answer,
        onChange: handleTextareaChange,
        disabled: status === "submitting",
        placeholder: "Answer here"
      }),
      React.createElement("br", null),
      React.createElement(
        "button",
        { disabled: answer.length === 0 || status === "submitting" },
        "Submit"
      ),
      error !== null && React.createElement(
        "p",
        { className: "error" },
        error.message
      )
    )
  );
}

function submitForm(answer) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default function App() {
  return React.createElement(Form, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));