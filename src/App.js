import './App.css';
import Header from './components/Header';
import Patron from './pages/Patron';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import TransactionList from './pages/TransactionList';
import JourneysList from './pages/JourneysList';
import Card from './pages/Card';

function App() {
  return (
    <div className="App">
        <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/patron/:id" element={<Patron />} />

      <Route path="/transactions" element={<TransactionList />} />

      <Route path="/journeys" element={<JourneysList />} />

      <Route path="/card" element={<Card />} /> 
    </Routes>
    </div>
  );
}

export default App;
