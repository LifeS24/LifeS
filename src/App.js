import React, { useContext } from 'react'
import './App.css';
import Home from "./pages/home/index";
import TryLifeS from './pages/tryLifeS';
import Footer from './components/Footer';
import { Context } from './context/Context';
import "./fonts/Montserrat-VariableFont_wght.ttf";
import "./fonts/Montserrat-Italic-VariableFont_wght.ttf";

function App() {
  const { visible } = useContext(Context)

  return (
    <div className="App">
        {visible &&
          <Home />
        }
        {!visible &&
          <TryLifeS />
        }
        <Footer />
    </div>
  );
}

export default App;
