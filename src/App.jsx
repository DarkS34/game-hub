import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseGame from "./pages/ChooseGame/ChooseGame";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import Hangman from "./pages/Hangman/Hangman";
import Sudoku from "./pages/Sudoku/Sudoku";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="site-main">
        <Routes>
          <Route index path="/" element={<ChooseGame />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="hangman" element={<Hangman />} />
          <Route path="sudoku" element={<Sudoku />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
