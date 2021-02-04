import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Input = props => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleResponse = json => {
    setLoading(false);
    setMsg(json.msg);
    setName("");
    setEmail("");
    props.history.push("/success");
  };
  const handleClick = e => {
    e.preventDefault();

    setLoading(true);
    fetch(`/.netlify/functions/add_member?name=${name}&email=${email}`)
      .then(response => response.json())
      .then(handleResponse)
      .catch(handleResponse);
  };

  return (
    <React.Fragment>
      <p>
        <label>
          What’s your name?
          <br />
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          What’s your email?
          <br />
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <button onClick={handleClick}>
          {loading ? "Loading..." : "Submit"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    </React.Fragment>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/success">Yay!</Route>
          <Route path="/" component={Input} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
