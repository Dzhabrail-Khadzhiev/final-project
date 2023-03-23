import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { userData } from "./localStorage/local";
import Authorization from "./pages/Authorization/Authorization";
import Home from "./pages/Home/Home";
import SignupClient from "./pages/Registration/SignupClient/SignupClient";
import SignupRest from "./pages/Registration/SignupRest/SignupRest";

function App() {
  const { token } = userData();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login/client");
    }
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/client" element={<SignupClient />} />
        <Route path="/login/rest" element={<SignupRest />} />
        <Route path="/login/enter" element={<Authorization />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
