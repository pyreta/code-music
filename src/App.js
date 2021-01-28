import React, { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleResponse = json => {
    setLoading(false);
    setMsg(json.msg);
    setName('');
    setEmail('');
  }
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
        <button
          onClick={handleClick}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    </React.Fragment>
  )
}

export default App;
