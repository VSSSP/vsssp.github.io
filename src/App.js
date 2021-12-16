import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <About />
    </div>
  );
}

export default App;
