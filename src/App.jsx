import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl mt-10 font-bold text-red-500">
        Vite + React
      </h1>
      <div className="text-center">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    </>
  );
}

export default App;
