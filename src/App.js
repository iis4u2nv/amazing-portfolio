import './App.css';
import Header from './components/Header'
import Project from './components/Project'
import Contact from './components/Contact'
import Resume from './components/Resume'
import About from './components/About'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="banner">
      </div>
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
