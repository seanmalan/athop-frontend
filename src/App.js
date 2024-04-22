import "./App.css";
import Header from "./components/Header";
import Patron from "./pages/Patron";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import TransactionList from "./pages/TransactionList";
import JourneysList from "./pages/JourneysList";
import Card from "./pages/Card";
import LoginPage from "./pages/LoginPage";

function App() {
  const authenticated = false; // This should be replaced with your actual authentication logic

  return (
    <div className="App">
      <Header />
      <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/patron/:id" element={authenticated ? <Patron /> : <Navigate to="/login" replace />} />

        <Route path="/transactions" element={<TransactionList />} />

        <Route path="/journeys" element={<JourneysList />} />

        <Route path="/cards" element={<Card />} />
        <Route path="/card/:id" element={<Card />} />
      </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
