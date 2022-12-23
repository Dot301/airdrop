import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TokenPage from './Components/TokenPage';

// Router no use    
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="/header" element={<Header />}/>
          <Route path="/tokenaddress" element={<TokenPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
