import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Olá, Mundo!");

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Olá, fui clicado!");
        }}
      >
        Mudar Mensagem
      </button>
    </div>
  );
}

export default App;
