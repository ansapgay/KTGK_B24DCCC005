import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/posts/:id" element={<Detail />} />
          <Route path="/posts/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
