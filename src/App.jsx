function App() {
  let message = "Olá Mundo!";

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          message = "Olá, fui clicado!";
        }}
      >
        Mudar Mensagem
      </button>
    </div>
  );
}

export default App;
