import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
