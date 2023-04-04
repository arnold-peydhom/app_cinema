import './App.css';
//import RouteNav from './components/Routes/RouteNav';
import AcceuilHeader from '../src/components/vue/header/AcceuilHeader';
import AcceuilBody from '../src/components/vue/body/AcceuilBody';
import AcceuilFooter from '../src/components/vue/footer/AcceuilFooter';
function App() {
  return (
    <div className="App">
      <AcceuilHeader/>
      <AcceuilBody/>
      <AcceuilFooter/>
    </div>
  );
}

export default App;
