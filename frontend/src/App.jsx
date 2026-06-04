import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const API = "http://localhost:3000";

  const register = async () => {
    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  const login = async () => {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setToken(data.accessToken || "");
    setMessage(data.message || data.error);
  };

  const protectedRoute = async () => {
    const res = await fetch(`${API}/protected`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial",
      background: "#0f172a",
      color: "white"
    }}>

      <div style={{
        width: "400px",
        padding: "30px",
        background: "#1e293b",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
      }}>

        <h1 style={{ textAlign: "center" }}>🚀 Cubenode</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "none"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "none"
          }}
        />

        <button onClick={register} style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Register
        </button>

        <button onClick={login} style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          background: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Login
        </button>

        <button onClick={protectedRoute} style={{
          width: "100%",
          padding: "10px",
          background: "#f59e0b",
          color: "black",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Protected Route
        </button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          {message}
        </p>

        {token && (
          <textarea
            value={token}
            readOnly
            rows="5"
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "6px"
            }}
          />
        )}
      </div>
    </div>
  );
}

