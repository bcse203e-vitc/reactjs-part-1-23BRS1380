import { useState } from "react";

function Test() {
  const [age, setAge] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Enter Your Age:</h2>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter age"
        style={inputStyle}
      />
      {age && <p>{age >= 18 ? "✅ You are an adult" : "🔹 You are a minor"}</p>}
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  width: "150px",
  textAlign: "center",
};

export default Test;
