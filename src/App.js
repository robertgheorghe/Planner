import { Route, Routes } from "react-router-dom";
import Content from "./components/pages/Content";
import Header from "./components/pages/Header";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
