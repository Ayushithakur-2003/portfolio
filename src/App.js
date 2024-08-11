import './App.css';
import Intro from './Introduction/Intro/Intro';
import Index from './Projects/myprojects/Index';
import Contact from './Extra/extra/Contact';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro/>
        <Index/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
