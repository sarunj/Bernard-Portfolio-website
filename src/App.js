import Navbar from "./components/Navbar";
import Home from "./components/Home";



function App() {
  return (
    <div className="flex flex-col w-full bg-gradient-to-b">
        <Navbar />
        <Home />
    </div>
  );
}

export default App;
