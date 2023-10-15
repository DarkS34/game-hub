import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ChooseGame from "./pages/ChooseGame/ChooseGame";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import Hangman from "./pages/Hangman/Hangman";
import Sudoku from "./pages/Sudoku/Sudoku";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <NavBar />
      <main className="site-main">
        <Routes>
          <Route path="login" index element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ChooseGame />
              </ProtectedRoute>
            }
          />
          <Route
            path="tictactoe"
            element={
              <ProtectedRoute>
                <TicTacToe />
              </ProtectedRoute>
            }
          />
          <Route
            path="hangman"
            element={
              <ProtectedRoute>
                <Hangman />
              </ProtectedRoute>
            }
          />
          <Route
            path="sudoku"
            element={
              <ProtectedRoute>
                <Sudoku />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
