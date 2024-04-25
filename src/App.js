import "./App.css";
import Header from "./components/Header";
import Patron from "./pages/Patron";
import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";
import TransactionList from "./pages/TransactionList";
import JourneysList from "./pages/JourneysList";
import Card from "./pages/Card";
import LoginPage from "./pages/LoginPage";

import PrivateRoutes from "./utils/PrivateRoute";

function App() {
  const authenticated = false; // This should be replaced with your actual authentication logic

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/patron/:id" element={<Patron />} />
          </Route>
          <Route path="/transactions" element={<TransactionList />} />

        <Route path="/journeys" element={<JourneysList />} />

        <Route path="/cards" element={<Card />} />
        <Route path="/card/:id" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
