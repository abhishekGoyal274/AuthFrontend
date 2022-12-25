import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${email}`);
  };
  return (
    <div style={{ padding: "20px", backgroundColor: "black", color: "white" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <lable>
          Email:{" "}
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </lable>
        <br />
        <br />
        <lable>
          Password:{" "}
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </lable>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
