import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Jam3iyatModal from "./components/Jam3iyatModal";
import Jam3iyatList from "./components/Jam3iyatList";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <Jam3iyatModal />
      <Jam3iyatList />
    </div>
  );
}

export default App;
