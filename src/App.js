import{About, Work, Tastimonial, Footer, Skill, Header} from './container';
import{Navbar} from "./components";
import './App.scss'
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skill/>
      {/* <Tastimonial/> */}
      <Footer/>
    </div>
  );
}

export default App;
