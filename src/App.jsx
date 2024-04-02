import { useState, useEffect } from "react";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { Verify } from "./Verify.js";

function App() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (submitting) {
      console.log("run effect");
      Verify(email, pw, err, setEmail, setPw, setErr);
    }
    return () => {
      console.log("return");
      setErr([]);
    };
  }, [email, pw]);

  function submit(e) {
    e.preventDefault();
    setSubmitting(true);
    Verify(email, pw, err, setEmail, setPw, setErr);
    console.log(email, err);
  }

  return (
    <div>
      <form className="form" onSubmit={submit}>
        <div className="form-group error">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          {err.length === 0 && submitting
            ? alert("success")
            : err.map((item) => {
                return (
                  <div key={item.id} className="msg">
                    {item.msg}
                  </div>
                );
              })}
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            value={pw}
            type="password"
            id="password"
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
