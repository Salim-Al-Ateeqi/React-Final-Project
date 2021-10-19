import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Jam3iyatList from "./components/Jam3iyatList";
import CreateJam3iyaButton from "./components/CreateJam3iyaButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  toast.error("Unauthorized!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <CreateJam3iyaButton />
      <Jam3iyatList />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
