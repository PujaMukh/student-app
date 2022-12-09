import StudentList from "./components/StudentList";
import "./App.css";

const App = () => {
  const name = "C18";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada's class</h1>
      </header>
      <main>
        <StudentList />
      </main>
    </div>
  );
};

export default App;
