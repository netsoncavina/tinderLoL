import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import SwipeButtons from "./components/SwipeButtons";
function App() {
  return (
    <div className="app">
      <Header />
      <Card />
      <SwipeButtons />
    </div>
  );
}

export default App;
