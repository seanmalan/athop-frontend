import "./App.css";
import Header from "./components/Header";
import Patron from "./pages/Patron";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import TransactionList from "./pages/TransactionList";
import JourneysList from "./pages/JourneysList";
import Card from "./pages/Card";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} />

          <PrivateRoute path="/patron/:id" element={<Patron />} />

          <Route path="/transactions" element={<TransactionList />} />

          <Route path="/journeys" element={<JourneysList />} />

          <Route path="/cards" element={<Card />} />
          <Route path="/card/:id" element={<Card />} />
        </Routes>
    </div>
  );
}

export default App;
