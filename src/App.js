// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'
import Resume from './components/Resume'
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
  <div className="banner">    
  </div>
  <Outlet />
  <Project/>
  <Resume/>
  <Footer />
</div>
  );
}

export default App;
