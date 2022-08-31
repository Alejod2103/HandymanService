import './App.css';
import Footer from './components/footer/Footer';
import Topbar from './components/topbar/Topbar';
import Homepage from './pages/Homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar />

    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>

    <Footer />    
    </BrowserRouter>
    </>
  );
}

export default App;
