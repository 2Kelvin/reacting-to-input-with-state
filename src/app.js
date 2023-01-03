function Form({ status = "success" }) {
  if (status === "success") {
    return <h1 className="form_success">That's right✅</h1>;
  }

  return (
    <div className="form">
      <h2>City Quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea disabled={status === "submitting"} />
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
        {status === "error" && (
          <p className="error">Good guess but wrong answer. Try again!</p>
        )}
      </form>
    </div>
  );
}

export default function App() {
  return <Form />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
