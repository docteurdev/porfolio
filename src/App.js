import{About, Work, Tastimonial, Footer, Skill, Header, SideProject} from './container';
import{Navbar} from "./components";
import './App.scss'
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <SideProject/>
      <Skill/>
      <Footer/>
    </div>
  );
}

export default App;
