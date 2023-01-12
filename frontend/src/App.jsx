import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/questions" element={<QuestionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
