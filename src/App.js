import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Jam3iyatList from "./components/Jam3iyatList";
import CreateJam3iyaButton from "./components/CreateJam3iyaButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <CreateJam3iyaButton />
      <Jam3iyatList />
    </div>
  );
}

export default App;
